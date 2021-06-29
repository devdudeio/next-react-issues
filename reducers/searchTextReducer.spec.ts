import searchTextReducer from "./searchTextReducer";

describe('searchTextReducer', () => {
    test('should handle missing action arg', () => {
        const oldState = {repo: "", filter: "", searchText: "", issueType: "is:open"}

        // @ts-ignore
        const newState = searchTextReducer(oldState)
        expect(newState).toStrictEqual(oldState)
    });
    test('should handle wrong action', () => {
        const oldState = {repo: "", filter: "", searchText: "", issueType: "is:open"}

        // @ts-ignore
        const newState = searchTextReducer(oldState, "foo")
        expect(newState).toStrictEqual(oldState)
    });
    test('should set issueType to empty string', () => {
        const oldState = {repo: "", filter: "", searchText: "", issueType: "is:open"}
        const newState = searchTextReducer(oldState, {type: "show_all"})
        expect(newState).toStrictEqual({...oldState, issueType: ''})
    });
    test('should set issueType to "is:closed" ', () => {
        const oldState = {repo: "", filter: "", searchText: "", issueType: "is:open"}
        const newState = searchTextReducer(oldState, {type: "closed_only"})
        expect(newState).toStrictEqual({...oldState, issueType: 'is:closed'})
    });
    test('should set issueType to "is:open" ', () => {
        const oldState = {repo: "", filter: "", searchText: "", issueType: "is:closed"}
        const newState = searchTextReducer(oldState, {type: "open_only"})
        expect(newState).toStrictEqual({...oldState, issueType: 'is:open'})
    });
    test('should set searchText to "test" ', () => {
        const oldState = {repo: "", filter: "", searchText: "", issueType: "is:closed"}
        const newState = searchTextReducer(oldState, {type: "searchtext_change", payload: "test"})
        expect(newState).toStrictEqual({...oldState, searchText: "test"})
    });
})