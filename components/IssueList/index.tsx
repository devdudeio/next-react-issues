import IssueListItem from "../IssueListItem";
import Button from "../Button";
import PropTypes from "prop-types";
import {FunctionComponent} from 'react';
import {QueryResult, ApolloError} from "@apollo/client";
import {Issue, SearchResultItemEdge} from "../../@types/schema";

type IssueList = {
    error: QueryResult["error"],
    data: QueryResult["data"],
    fetchMore: QueryResult["fetchMore"],
    variables: QueryResult["variables"],
}

const IssueList: FunctionComponent<IssueList> = ({error, data, fetchMore, variables}): JSX.Element => {
    if (!data) return <p>Loading</p>
    if (error) return <p>{error}</p>

    const issues = data.search.edges.map((edge: SearchResultItemEdge) => edge.node);
    const pageInfo = data.search.pageInfo
    const noIssuesFound = issues.length === 0;
    const hasMoreToLoad = pageInfo?.hasNextPage;

    const fetchMoreIssues = () => {
        if (hasMoreToLoad) {
            fetchMore({
                variables: {
                    query: variables?.query,
                    cursor: data?.search?.pageInfo?.endCursor,
                }
            })
        }
    }
    return (
        <>
            <IssueListSection>
                <ul className="divide-y divide-gray-200">
                    {noIssuesFound ?
                        <p>Nothing to show you here</p>
                        :
                        issues.map((issue: Issue) => <IssueListItem key={issue.id} {...issue}/>)
                    }
                </ul>
            </IssueListSection>
            <LoadMoreSection>
                <Button onClick={fetchMoreIssues}>Load More</Button>
            </LoadMoreSection>
        </>
    );
}

const IssueListSection: FunctionComponent = ({children}) =>
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
        {children}
    </div>

const LoadMoreSection: FunctionComponent = ({children}) =>
    <div className="flex justify-center m-10">
        {children}
    </div>

IssueList.propTypes = {
    error: PropTypes.instanceOf(ApolloError),
    data: PropTypes.object,
    fetchMore: PropTypes.func.isRequired,
    variables: PropTypes.object.isRequired,
}


export default IssueList;
