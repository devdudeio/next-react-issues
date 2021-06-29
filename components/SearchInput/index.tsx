import SearchIcon from "../Icons/SearchIcon";
import Select from "../Select";
import Input from "../Input";
import {ChangeEventHandler, Dispatch, FunctionComponent, ReducerAction} from "react";
import {StateType} from "../../reducers/searchTextReducer";

type SearchInput = {
    searchState: StateType,
    onChange: ChangeEventHandler<HTMLInputElement>
    dispatch: Dispatch<ReducerAction<any>>
}

const SearchInput: FunctionComponent<SearchInput> = ({searchState, onChange, dispatch}): JSX.Element => {
    const searchStateToValue = (searchState: StateType) => {
        switch (searchState.issueType) {
            case '':
                return 0;
            case 'is:open':
                return 1;
            case 'is:closed':
                return 2;
            default:
                return 0;
        }
    }

    const onSelectChange = ({target: {value}}) => {
        switch (value) {
            case 'both':
                return dispatch({type: 'show_all'});
            case 'open':
                return dispatch({type: 'open_only'});
            case 'closed':
                return dispatch({type: 'closed_only'});
            default:
                return 0;
        }
    }

    return (
        <SearchInputSection>
            <SearchIconSection>
                <SearchIcon/>
            </SearchIconSection>
            <Input id="search" name="search" value={searchState.searchText} onChange={onChange}
                   placeholder="Search Issues"/>
            <SelectSection>
                <Select onChange={onSelectChange} value={searchStateToValue(searchState)} name="issueType" options={["both", "open", "closed"]}/>
            </SelectSection>
        </SearchInputSection>
    )
}


const SearchInputSection: FunctionComponent = ({children}): JSX.Element =>
    <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
        <div className="w-full sm:max-w-xs">
            <div className="relative">
                {children}
            </div>
        </div>
    </div>

const SearchIconSection: FunctionComponent = ({children}): JSX.Element =>
    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
        {children}
    </div>

const SelectSection: FunctionComponent = ({children}): JSX.Element =>
    <div className="absolute inset-y-0 right-0 flex items-center">
        {children}
    </div>


export default SearchInput;