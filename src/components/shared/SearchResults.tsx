import { Models } from "appwrite";
import Loader from "./Loader";
import GridPostList from "./GridPostList";

// import React from 'react'
type SearchResultsProps = {
  isSearchFetching:boolean;
  searchedPosts:Models.Document[]
}
const SearchResults = ({isSearchFetching,searchedPosts}:SearchResultsProps) => {
  if(isSearchFetching) return <Loader/>

  if(searchedPosts && searchedPosts.documents.length > 0)
  {
    return
    (
      <GridPostList posts={searchedPosts.documents}/>
    )
  }
  return (
    <p className="w-full mt-10 text-center text-light-4">No results Found</p>
  )
}

export default SearchResults
