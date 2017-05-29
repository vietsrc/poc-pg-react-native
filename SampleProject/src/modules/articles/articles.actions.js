import axios from 'axios';
import * as types from '../../constants/actionTypes';
import { API_URL } from '../../constants/api';

// ARTICLES
export function retrieveRecommendedArticlesListSuccess(res) {
  return {
    type: types.RETRIEVE_RECOMMENDED_ARTICLES_SUCCESS,
    recommendedArticlesList: res.data
  };
}

export function retrieveRecommendedArticlesList(page) {
  return function (dispatch) {
    return axios.get(`${API_URL}articles_home_recommendations.json`)
      .then(res => {
        dispatch(retrieveRecommendedArticlesListSuccess(res));
      })
      .catch(error => {
        console.log('Recommended Articles', error); //eslint-disable-line
      });
  };
}

export function retrieveCategoryArticlesListSuccess(res) {
  return {
    type: types.RETRIEVE_CATEGORY_ARTICLES_SUCCESS,
    categoryArticlesList: res.data
  };
}

export function retrieveCategoryArticlesList(page) {
  return function (dispatch) {
    return axios.get(`${API_URL}category_articles.json`)
      .then(res => {
        dispatch(retrieveCategoryArticlesListSuccess(res));
      })
      .catch(error => {
        console.log('Category Articles', error); //eslint-disable-line
      });
  };
}

export function retrieveSubjectArticlesListSuccess(res) {
  return {
    type: types.RETRIEVE_SUBJECT_ARTICLES_SUCCESS,
    subjectArticlesList: res.data
  };
}

export function retrieveSubjectArticlesList(page) {
  return function (dispatch) {
    return axios.get(`${API_URL}articles_home_recommendations.json`)
      .then(res => {
        dispatch(retrieveSubjectArticlesListSuccess(res));
      })
      .catch(error => {
        console.log('Subject Articles', error); //eslint-disable-line
      });
  };
}

export function retrieveCategorySubjectArticlesListSuccess(res) {
  return {
    type: types.RETRIEVE_CATEGORY_SUBJECT_ARTICLES_SUCCESS,
    categorySubjectArticlesList: res.data
  };
}

export function retrieveCategorySubjectArticlesList(page) {
  return function (dispatch) {
    return axios.get(`${API_URL}subject_categories.json`)
      .then(res => {
        dispatch(retrieveCategorySubjectArticlesListSuccess(res));
      })
      .catch(error => {
        console.log('Category-Subject Articles', error); //eslint-disable-line
      });
  };
}

export function retrieveSearchArticlesListSuccess(res) {
  return {
    type: types.RETRIEVE_SEARCH_ARTICLES_SUCCESS,
    searchArticlesList: res.data
  };
}

export function retrieveSearchArticlesList(page) {
  return function (dispatch) {
    return axios.get(`${API_URL}articles_home_recommendations.json`)
      .then(res => {
        dispatch(retrieveSearchArticlesListSuccess(res));
      })
      .catch(error => {
        console.log('Search Articles', error); //eslint-disable-line
      });
  };
}

export function retrieveCategoriesListSuccess(res) {
  return {
    type: types.RETRIEVE_CATEGORIES_SUCCESS,
    categoriesList: res.data
  };
}

export function retrieveCategoriesList(page) {
  return function (dispatch) {
    return axios.get(`${API_URL}categories.json`)
      .then(res => {
        dispatch(retrieveCategoriesListSuccess(res));
      })
      .catch(error => {
        console.log('Categories', error); //eslint-disable-line
      });
  };
}

export function retrieveSubjectsListSuccess(res) {
  return {
    type: types.RETRIEVE_SUBJECTS_SUCCESS,
    subjectsList: res.data
  };
}

export function retrieveSubjectsList(page) {
  return function (dispatch) {
    return axios.get(`${API_URL}subjects.json`)
      .then(res => {
        dispatch(retrieveSubjectsListSuccess(res));
      })
      .catch(error => {
        console.log('Subjects', error); //eslint-disable-line
      });
  };
}


export function retrieveJournalistsListSuccess(res) {
  return {
    type: types.RETRIEVE_JOURNALISTS_SUCCESS,
    journalistsList: res.data
  };
}

export function retrieveJournalistsList(page) {
  return function (dispatch) {
    return axios.get(`${API_URL}articles_home_recommendations.json`)
      .then(res => {
        dispatch(retrieveJournalistsListSuccess(res));
      })
      .catch(error => {
        console.log('Journalists', error); //eslint-disable-line
      });
  };
}
