import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function (state = initialState.articles, action) {
  switch (action.type) {

    case types.RETRIEVE_RECOMMENDED_ARTICLES_SUCCESS:
      return {
        ...state,
        recommendedArticlesList: action.recommendedArticlesList
      };

    case types.RETRIEVE_CATEGORY_ARTICLES_SUCCESS:
      return {
        ...state,
        categoryArticlesList: action.categoryArticlesList
      };

    case types.RETRIEVE_SUBJECT_ARTICLES_SUCCESS:
      return {
        ...state,
        subjectArticlesList: action.subjectArticlesList
      };

    case types.RETRIEVE_CATEGORY_SUBJECT_ARTICLES_SUCCESS:
      return {
        ...state,
        categorySubjectArticlesList: action.categorySubjectArticlesList
      };

    case types.RETRIEVE_SEARCH_ARTICLES_SUCCESS:
      return {
        ...state,
        searchArticlesList: action.searchArticlesList
      };

    case types.RETRIEVE_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesList: action.categoriesList
      };

    case types.RETRIEVE_SUBJECTS_SUCCESS:
      return {
        ...state,
        subjectsList: action.subjectsList
      };

    case types.RETRIEVE_JOURNALISTS_SUCCESS:
      return {
        ...state,
        journalistsList: action.journalistsList
      };

    default:
      return state;
  }
}
