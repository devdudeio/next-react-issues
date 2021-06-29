type ReducerActionType = {
    type: 'closed_only' | 'open_only' | 'show_all' | 'searchtext_change'
    payload?: string,
}

export const initialState = ({q}: { q: string }) => {
    const owner = process.env.NEXT_PUBLIC_REPOSITORY_OWNER;
    const repo = process.env.NEXT_PUBLIC_REPOSITORY_NAME;
    return ({
        repo: `repo:${owner}/${repo}`,
        filter: 'in:title in:body',
        searchText: `${q}`,
        issueType: '',
    })
};

export type StateType = {
    repo: string,
    filter: string,
    searchText: string,
    issueType: string,
}

const searchTextReducer = (state: StateType, action: ReducerActionType) => {
    switch (action?.type) {
        case 'closed_only':
            return {...state, issueType: 'is:closed'};
        case 'open_only':
            return {...state, issueType: 'is:open'};
        case 'show_all':
            return {...state, issueType: ''};
        case 'searchtext_change':
            return {...state, searchText: action?.payload};
        default:
            return state;
    }
}

export default searchTextReducer
