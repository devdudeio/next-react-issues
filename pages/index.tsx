import {useEffect, useReducer} from 'react';
import {useRouter} from 'next/router'
import useSearchIssueList from "../hooks/useSearchIssueList";
import Issues from "../components/IssueList";
import Header from "../components/Header";
import ClientOnly from "../components/ClientOnly/";
import AppTitle from "../components/AppTitle";
import SearchInput from "../components/SearchInput";
import HeadTitle from "../components/HeadTitle";
import AppTitleSection from "../components/AppTitleSection";
import searchTextReducer, {initialState} from "../reducers/searchTextReducer";
import {StateType} from "../reducers/searchTextReducer";

const SearchListPage = ({q}: { q: string }) => {
    const router = useRouter()
    const [searchState, dispatch] = useReducer(searchTextReducer, initialState({q}));
    const searchStateToQueryString = ({repo, filter, issueType}: StateType) => {

        return `${repo} type:issue ${issueType} ${filter} ${searchState.searchText}`;
    }
    const {
        loading,
        data,
        error,
        fetchMore,
        variables
    } = useSearchIssueList({query: searchStateToQueryString(searchState)})

    const onChange = ({target: {value}}: React.ChangeEvent<HTMLInputElement>): void => dispatch({
        type: 'searchtext_change',
        payload: value,
    });

    const IssuesProps = {loading, data, error, fetchMore, variables};

    useEffect(() => {
        router.push({pathname: '/', query: {q: searchState.searchText}}, undefined, {shallow: true})
    }, [searchState.searchText])

    return (
        <>
            <ClientOnly>
                <HeadTitle>React Issues</HeadTitle>
                <Header>
                    <AppTitleSection>
                        <AppTitle>React Issues</AppTitle>
                    </AppTitleSection>
                    <SearchInput dispatch={dispatch} searchState={searchState} onChange={onChange}/>
                </Header>
                <Issues {...IssuesProps}/>
            </ClientOnly>
        </>
    )
}

SearchListPage.getInitialProps = async (context: { query: { q: any; }; }) => {
    return {q: context.query.q}
}

export default SearchListPage;