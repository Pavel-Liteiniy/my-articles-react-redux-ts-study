import { useCallback } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

type Props = {
	article: IArticle;
	removeArticle: (article: IArticle) => void;
};

export const Article: React.FC<Props> = ({ article, removeArticle }) => {
	const dispatch: Dispatch<any> = useDispatch();

	const deleteArticle = useCallback((article: IArticle) => dispatch(removeArticle(article)), [dispatch, removeArticle]);

	const { title, body } = article;

	return (
		<div className="article">
			<div>
				<h1>{title}</h1>
				<p>{body}</p>
			</div>
			<button onClick={() => deleteArticle(article)}>Delete</button>
		</div>
	);
};
