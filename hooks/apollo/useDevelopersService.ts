import useNotification from '../useNotification'
import {
  ApolloError,
  gql,
  TypedDocumentNode,
  useMutation,
  useQuery,
} from '@apollo/client'
import {
  Developer,
  DeveloperUncheckedCreateInput,
  DeveloperUncheckedUpdateInput,
} from '../../gql/graphql'

const DEVELOPERS: TypedDocumentNode<
  { developers: Developer[] },
  { groupId?: number }
> = gql`
  query getDevelopers($groupId: Int) {
    developers(groupId: $groupId) {
      id
      name
      fullName
      legalAddress
      actualAddress
      inn
      kpp
      ogrn
      manager
      website
      phone
      email
      info
      groupId
      group {
        name
      }
    }
  }
`

const CREATE_DEVELOPER = gql`
  mutation createDeveoper($input: DeveloperUncheckedCreateInput!) {
    createDeveloper(input: $input) {
      id
      name
      groupId
    }
  }
`

const UPDATE_DEVELOPER = gql`
  mutation updateDeveoper($id: Int!, $input: DeveloperUncheckedUpdateInput!) {
    updateDeveloper(id: $id, input: $input) {
      id
      name
    }
  }
`

const DELETE_DEVELOPER = gql`
  mutation deleteDeveoper($id: Int!) {
    removeDeveloper(id: $id) {
      id
      name
    }
  }
`

export default function useDevelopersService(groupId?: number | null) {
  const { successNotice, errorNotice } = useNotification()

  const { data, loading } = useQuery(DEVELOPERS, {
    variables: { groupId: groupId ?? undefined },
  })

  const [create, { loading: isCreating }] = useMutation<
    {
      data: {
        createDeveloper: Developer
      }
    },
    { input: DeveloperUncheckedCreateInput }
  >(CREATE_DEVELOPER, {
    onCompleted() {
      successNotice('Застройщик добавлен')
    },
    onError(error: ApolloError) {
      errorNotice(error.message)
    },
    refetchQueries: [{ query: DEVELOPERS }, 'getDevelopers'],
  })

  const [update, { loading: isUpdateing }] = useMutation<
    {
      data: {
        updateDeveloper: Developer
      }
    },
    { id: number; input: DeveloperUncheckedUpdateInput }
  >(UPDATE_DEVELOPER, {
    onCompleted() {
      successNotice('Сохранено')
    },
    onError(error: ApolloError) {
      errorNotice(error.message)
    },
    refetchQueries: [{ query: DEVELOPERS }, 'getDevelopers'],
  })

  const [remove, { loading: isDeleting }] = useMutation<any, { id: number }>(
    DELETE_DEVELOPER,
    {
      onCompleted() {
        successNotice('Удалено')
      },
      onError(error: ApolloError) {
        errorNotice(error.message)
      },
      refetchQueries: [{ query: DEVELOPERS }, 'getDevelopers'],
    }
  )

  return {
    developers: data?.developers || [],
    create,
    update,
    remove,
    isDeleting,
    isUpdateing,
    isCreating,
    loading,
  }
}
