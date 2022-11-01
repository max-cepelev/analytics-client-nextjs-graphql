import useNotification from '../useNotification'
import { ApolloError, gql, useMutation, useQuery } from '@apollo/client'
import { Group, RegionWhereUniqueInput } from '../../gql/graphql'

const GROUPS = gql`
  query getGroups {
    groups {
      id
      name
      regions {
        name
      }
    }
  }
`

const CREATE_GROUP = gql`
  mutation createGroup($name: String!, $regions: [RegionWhereUniqueInput!]) {
    createGroup(input: { name: $name, regions: { connect: $regions } }) {
      id
      name
    }
  }
`

const UPDATE_GROUP = gql`
  mutation updateGroup(
    $id: Int!
    $name: String!
    $regions: [RegionWhereUniqueInput!]
  ) {
    updateGroup(
      id: $id
      input: { name: { set: $name }, regions: { set: $regions } }
    ) {
      id
      name
    }
  }
`

const DELETE_GROUP = gql`
  mutation deleteGroup($id: Int!) {
    removeGroup(id: $id) {
      id
      name
    }
  }
`

export default function useGroupsService() {
  const { successNotice, errorNotice } = useNotification()

  const { data, loading, error } = useQuery<{ groups: Group[] }>(GROUPS)

  const [create, { loading: isCreating }] = useMutation<
    {
      data: {
        createGroup: Group
      }
    },
    { name: string; regions?: RegionWhereUniqueInput }
  >(CREATE_GROUP, {
    onCompleted() {
      successNotice('Создана новая группа компаний')
    },
    onError(error: ApolloError) {
      errorNotice(error.message)
    },
    refetchQueries: [{ query: GROUPS }, 'getGroups'],
  })

  const [update, { loading: isUpdateing }] = useMutation<
    {
      data: {
        updateGroup: Group
      }
    },
    { id: number; name: string; regions?: RegionWhereUniqueInput }
  >(UPDATE_GROUP, {
    onCompleted() {
      successNotice('Сохранено')
    },
    onError(error: ApolloError) {
      errorNotice(error.message)
    },
    refetchQueries: [{ query: GROUPS }, 'getGroups'],
  })

  const [remove, { loading: isDeleting }] = useMutation<any, { id: number }>(
    DELETE_GROUP,
    {
      onCompleted() {
        successNotice('Удалено')
      },
      onError(error: ApolloError) {
        errorNotice(error.message)
      },
      refetchQueries: [{ query: GROUPS }, 'getGroups'],
    }
  )

  return {
    groups: data?.groups || [],
    create,
    update,
    remove,
    isDeleting,
    isUpdateing,
    isCreating,
    loading,
  }
}
