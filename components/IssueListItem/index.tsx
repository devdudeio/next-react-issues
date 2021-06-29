import Link from "next/link";
import {FunctionComponent, useMemo} from "react";
import {Issue, IssueState} from "../../@types/schema";
import {toHumanReadableDate} from "../../helpers/toHumanReadableDate";
import DateIcon from "../Icons/DateIcon";
import Avatar from "../Avatar";
import AuthorTitle from "../AuthorTitle";

const IssueListItem: FunctionComponent<Issue> = (issue): JSX.Element =>
    <IssueListItemSection id={issue.id}>
        <IssueTitleSection>
            <IssueTitle>{issue?.title}</IssueTitle>
            <IssueStateSection>
                <State closed={issue.closed} state={issue.state}/>
            </IssueStateSection>
        </IssueTitleSection>
        <div className="mt-2 sm:flex sm:justify-between">
            <div className="sm:flex">
                <Avatar src={issue?.author?.avatarUrl || ''} alt={`${issue?.author?.login} avatar`}/>
                <AuthorTitle>{issue?.author?.login || ''}</AuthorTitle>
            </div>
            <IssueDateSection>
                <DateIcon/>
                <IssueDate closed={issue.closed} createdAt={issue.createdAt} closedAt={issue.closedAt}/>
            </IssueDateSection>
        </div>
    </IssueListItemSection>


const IssueListItemSection: FunctionComponent<{ id: string }> = ({id, children}): JSX.Element => {
    const href = `issue/${id}`;
    return (
        <li>
            <Link href={href}>
                <a className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                        {children}
                    </div>
                </a>
            </Link>
        </li>
    )
}

const IssueTitle: FunctionComponent = ({children}): JSX.Element =>
    <p className="text-sm font-medium text-indigo-600 truncate">{children}</p>


const State: FunctionComponent<{
    state: IssueState,
    closed: boolean,
}> = ({state, closed}): JSX.Element =>
    closed ?
        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">{state}</p>
        :
        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{state}</p>


const IssueTitleSection: FunctionComponent = ({children}): JSX.Element =>
    <div className="flex items-center justify-between">{children}</div>

const IssueStateSection: FunctionComponent = ({children}): JSX.Element =>
    <div className="ml-2 flex-shrink-0 flex">{children}</div>

const IssueDateSection: FunctionComponent = ({children}): JSX.Element =>
    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">{children}</div>


const IssueDate: FunctionComponent<{ closed: boolean, createdAt: string, closedAt: string }> = ({
                                                                                                    closed,
                                                                                                    createdAt,
                                                                                                    closedAt
                                                                                                }): JSX.Element => {
    const selectedDate = closed ? closedAt : createdAt;
    const memoizedDate = useMemo(() => toHumanReadableDate(selectedDate), [selectedDate]);
    return (
        <p>
            <time>{memoizedDate}</time>
        </p>
    )
}

export default IssueListItem;