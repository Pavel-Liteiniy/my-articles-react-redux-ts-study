import { useState } from 'react';

type Props = {
	saveArticle: (article: IArticle | any) => void;
};

type InitialState = {
	title: string;
	body: string;
};

export const AddArticle: React.FC<Props> = ({ saveArticle }) => {
	const initialState = {
		title: '',
		body: '',
	};

	const [article, setArticle] = useState<InitialState>(initialState);

	const handleArticleData = (evt: React.FormEvent<HTMLInputElement>) => {
		setArticle({
			...article,
			[evt.currentTarget.id]: evt.currentTarget.value,
		});
	};

	const addNewArticle = (evt: React.FormEvent) => {
		evt.preventDefault();
		saveArticle(article);
		setArticle(initialState);
	};

	const { title, body } = article;

	return (
		<form onSubmit={addNewArticle} className="add-article">
			<input type="text" id="title" placeholder="Title" onChange={handleArticleData} value={title} />
			<input type="text" id="body" placeholder="Description" onChange={handleArticleData} value={body} />
			<button disabled={!(title || body)}>Add article</button>
		</form>
	);
};
