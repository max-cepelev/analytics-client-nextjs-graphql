import useNotification from '../useNotification'
import {
  ApolloError,
  gql,
  TypedDocumentNode,
  useMutation,
  useQuery,
} from '@apollo/client'
import {
  Complex,
  ComplexUncheckedCreateInput,
  ComplexUncheckedUpdateInput,
} from '../../gql/graphql'

const COMPLEXES: TypedDocumentNode<
  { complexes: Complex[] },
  { groupId?: number; districtId?: number; cityId?: number }
> = gql`
  query getComplexes($groupId: Int, $districtId: Int, $cityId: Int) {
    complexes(groupId: $groupId, districtId: $districtId, cityId: $cityId) {
      id
      name
      shortName
      website
      info
      domRfId
      domClickId
      groupId
      cityId
      districtId
      group {
        name
      }
      city {
        name
      }
      district {
        name
      }
    }
  }
`

const CREATE_COMPLEX = gql`
  mutation createComplex($input: ComplexUncheckedCreateInput!) {
    createComplex(createComplexInput: $input) {
      id
      name
    }
  }
`

const UPDATE_COMPLEX = gql`
  mutation updateComplex($id: Int!, $input: ComplexUncheckedUpdateInput!) {
    updateComplex(id: $id, input: $input) {
      id
      name
    }
  }
`

const DELETE_COMPLEX = gql`
  mutation deleteComplex($id: Int!) {
    removeComplex(id: $id) {
      id
      name
    }
  }
`

export default function useComplexesService({
  groupId,
  districtId,
  cityId,
}: {
  groupId?: number | null
  districtId?: number | null
  cityId?: number | null
}) {
  const { successNotice, errorNotice } = useNotification()

  const { data, loading } = useQuery(COMPLEXES, {
    variables: {
      groupId: groupId ?? undefined,
      districtId: districtId ?? undefined,
      cityId: cityId ?? undefined,
    },
  })

  const [create, { loading: isCreating }] = useMutation<
    {
      data: {
        createComplex: Complex
      }
    },
    { input: ComplexUncheckedCreateInput }
  >(CREATE_COMPLEX, {
    onCompleted() {
      successNotice('Застройщик добавлен')
    },
    onError(error: ApolloError) {
      errorNotice(error.message)
    },
    refetchQueries: [{ query: COMPLEXES }, 'getComplexes'],
  })

  const [update, { loading: isUpdateing }] = useMutation<
    {
      data: {
        updateComplex: Complex
      }
    },
    { id: number; input: ComplexUncheckedUpdateInput }
  >(UPDATE_COMPLEX, {
    onCompleted() {
      successNotice('Сохранено')
    },
    onError(error: ApolloError) {
      errorNotice(error.message)
    },
    refetchQueries: [{ query: COMPLEXES }, 'getComplexes'],
  })

  const [remove, { loading: isDeleting }] = useMutation<any, { id: number }>(
    DELETE_COMPLEX,
    {
      onCompleted() {
        successNotice('Удалено')
      },
      onError(error: ApolloError) {
        errorNotice(error.message)
      },
      refetchQueries: [{ query: COMPLEXES }, 'getComplexes'],
    }
  )

  return {
    complexes: data?.complexes || [],
    create,
    update,
    remove,
    isDeleting,
    isUpdateing,
    isCreating,
    loading,
  }
}
