import { FETCH_STATUSES } from "../../utils/constants";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../store/articles/actions";
import { selectArticles, selectArticlesError, selectArticlesStatus } from "../../store/articles/selectors";

export const Articles = () => {
    const dispatch = useDispatch();
    const articles = useSelector(selectArticles);
    const status = useSelector(selectArticlesStatus);
    const error = useSelector(selectArticlesError);

    const sendRequest = () => {
        dispatch(getArticles());
    };

    useEffect(() => {
        sendRequest(); 
    }, []);

    return (
        <>
            <h2>Articles</h2>
            <button onClick={sendRequest}>Get</button>
            {status === FETCH_STATUSES.REQUEST && <CircularProgress />}
            {error && <h4>{error}</h4>}
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>{article.title}</li>
                ))}
            </ul>
        </>
    );
};
