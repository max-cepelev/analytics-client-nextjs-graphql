import useNotification from '../useNotification'
import { ApolloError, gql, useMutation, useQuery } from '@apollo/client'
import { District, RegionUncheckedUpdateInput } from '../../gql/graphql'

const DISTRICTS = gql`
  query getDistricts($cityId: Int) {
    districts(cityId: $cityId) {
      id
      name
      cityId
      city {
        name
      }
    }
  }
`

const CREATE_DISTRICT = gql`
  mutation createDistrict($name: String!, $cityId: Int!) {
    createDistrict(input: { name: $name, cityId: $cityId }) {
      id
      name
    }
  }
`

const UPDATE_DISTRICT = gql`
  mutation updateDistrict($id: Int!, $name: String!, $cityId: Int!) {
    updateDistrict(
      id: $id
      input: { name: { set: $name }, cityId: { set: $cityId } }
    ) {
      id
      name
    }
  }
`

const DELETE_DISTRICT = gql`
  mutation deleteDistrict($id: Int!) {
    removeDistrict(id: $id) {
      id
      name
    }
  }
`

export default function useDistrictsService(cityId?: number | null) {
  const { successNotice, errorNotice } = useNotification()

  const { data, loading } = useQuery<
    { districts: District[] },
    { cityId?: number }
  >(DISTRICTS, {
    variables: { cityId: cityId ?? undefined },
  })

  const [create, { loading: isCreating }] = useMutation<
    {
      data: {
        createDistrict: District
      }
    },
    { name: string; cityId: number }
  >(CREATE_DISTRICT, {
    onCompleted() {
      successNotice('Создан новый район')
    },
    onError(error: ApolloError) {
      errorNotice(error.message)
    },
    refetchQueries: [{ query: DISTRICTS }, 'getDistricts'],
  })

  const [update, { loading: isUpdateing }] = useMutation<
    {
      data: {
        updateDistrict: District
      }
    },
    { id: number; name: string; cityId: number }
  >(UPDATE_DISTRICT, {
    onCompleted() {
      successNotice('Сохранено')
    },
    onError(error: ApolloError) {
      errorNotice(error.message)
    },
    refetchQueries: [{ query: DISTRICTS }, 'getDistricts'],
  })

  const [remove, { loading: isDeleting }] = useMutation<any, { id: number }>(
    DELETE_DISTRICT,
    {
      onCompleted() {
        successNotice('Удалено')
      },
      onError(error: ApolloError) {
        errorNotice(error.message)
      },
      refetchQueries: [{ query: DISTRICTS }, 'getDistricts'],
    }
  )

  return {
    districts: data?.districts || [],
    create,
    update,
    remove,
    isDeleting,
    isUpdateing,
    isCreating,
    loading,
  }
}
