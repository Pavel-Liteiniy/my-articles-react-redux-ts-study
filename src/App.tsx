import { useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import './index.css';

import { Article } from './components/article';
import { AddArticle } from './components/add-article';

import { addArticle, removeArticle } from './store/action-creators';
import { Dispatch } from 'redux';

const App: React.FC = () => {
	const articles: readonly IArticle[] = useSelector((state: ArticleState) => state.articles, shallowEqual);

	const dispatch: Dispatch<any> = useDispatch();

	const saveArticle = useCallback((article: IArticle) => dispatch(addArticle(article)), [dispatch]);

	return (
		<main>
			<h1>My Articles</h1>
			<AddArticle saveArticle={saveArticle} />
			{articles.map((article: IArticle) => (
				<Article key={article.id} article={article} removeArticle={removeArticle} />
			))}
		</main>
	);
};

export default App;
