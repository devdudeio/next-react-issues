import {useQuery, QueryResult} from '@apollo/client';
import SEARCH_ISSUE_LIST_QUERY from './searchIssueList.graphql'

type params = {
    query: string;
}

const useSearchIssueList = ({query}: params): QueryResult =>
    useQuery(SEARCH_ISSUE_LIST_QUERY, {variables: {query}})

export default useSearchIssueList;