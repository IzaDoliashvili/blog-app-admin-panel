import { useLangParam } from "../../../../../hooks/useLangParam";
import {BLOGS_QUERY_KEYS } from "../enum";

export const useBlogsQueryKeys = () => {
  const lang = useLangParam();

  return { LIST: lang + BLOGS_QUERY_KEYS.LIST };
};