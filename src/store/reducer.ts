import * as actionTypes from './action-types';

const initialState: ArticleState = {
	articles: [
		{
			id: 1,
			title: 'Post 1',
			body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus assumenda dolor sed temporibus aliquam, unde aut hic, blanditiis, porro odit fugiat aspernatur recusandae exercitationem impedit perspiciatis? Quos aliquid illo architecto?',
		},
	],
};

const reducer = (state: ArticleState = initialState, action: ArticleAction): ArticleState => {
	switch (action.type) {
		case actionTypes.ADD_ARTICLE:
			const newArticle: IArticle = {
				...action.article,
				id: new Date().valueOf(),
			};

			return {
				...state,
				articles: [...state.articles, newArticle],
			};
		case actionTypes.REMOVE_ARTICLE:
			const updatedArticles: IArticle[] = state.articles.filter((article) => article.id !== action.article.id);

			return {
				...state,
				articles: updatedArticles,
			};
	}

	return state;
};

export default reducer;
