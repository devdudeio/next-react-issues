import {useRouter} from 'next/router'
import Head from "next/head";
import ClientOnly from "../../components/ClientOnly/";
import useIssueDetail from "../../hooks/useIssueDetail";
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw'
import {toHumanReadableDate} from "../../helpers/toHumanReadableDate";
import {FunctionComponent} from "react";
import {IssueCommentEdge, IssueComment} from "../../@types/schema";
import Avatar from "../../components/Avatar";

const IssuePage: FunctionComponent = () => {
    const router = useRouter()
    const {id} = router.query
    const {data, loading, error} = useIssueDetail({id})

    if (loading) return null;
    if (error) return <p>Error</p>
    const selectedIssue = data?.node;
    const comments = data?.node?.comments?.edges
    return (
        <div className="bg-gray-100 h-screen">
            <ClientOnly>
                <Head>
                    <title>React Issue #{id}</title>
                </Head>
                <section className="px-0.5">
                    <ul className="py-4 space-y-2 sm:px-6 sm:space-y-4 lg:px-8">
                        <IssueDetailItem {...selectedIssue}/>
                        {comments.map(({ node }: IssueCommentEdge) => <Comment key={`cmt-${node?.id}`} {...node} />)}
                    </ul>
                </section>
            </ClientOnly></div>
    )
}


const IssueDetailItem: FunctionComponent<IssueComment> = ({author, createdAt, bodyHTML}) => {
    return (
        <li className="bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6">
            <div className="sm:flex sm:justify-between sm:items-baseline">
                <h1 className="text-base font-medium">
                    <Avatar alt={`${author?.login} avatar`} src={author?.avatarUrl} />
                    {" "}
                    <span className="text-gray-900">Issue from {author?.login}</span>
                </h1>
                <p className="mt-1 text-sm text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3">
                    <time>{toHumanReadableDate(createdAt)}</time>
                </p>
            </div>
            <div className="mt-4 space-y-6 text-sm text-gray-800">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{bodyHTML}</ReactMarkdown>
            </div>
        </li>
    )
}

const Comment: FunctionComponent<IssueComment> = ({author, createdAt, bodyHTML}) => {
    return (
        <li className="bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6">
            <div className="sm:flex sm:justify-between sm:items-baseline">
                <h3 className="text-base font-medium">
                    <Avatar alt={`${author?.login} avatar`} src={author?.avatarUrl} />
                    {" "}
                    <span className="text-gray-900">{author?.login}</span>
                </h3>
                <p className="mt-1 text-sm text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3">
                    <time>{toHumanReadableDate(createdAt)}</time>
                </p>
            </div>
            <div className="mt-4 space-y-6 text-sm text-gray-800">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{bodyHTML}</ReactMarkdown>
            </div>
        </li>
    )
}

export default IssuePage