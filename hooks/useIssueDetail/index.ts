import {useQuery, QueryResult} from '@apollo/client';
import ISSUE_DETAIL_QUERY from './issueDetail.graphql'

type params = {
    id: string
}


const useIssueDetail = ({id}: params): QueryResult =>
    useQuery(ISSUE_DETAIL_QUERY, {variables: {id}})

export default useIssueDetail;