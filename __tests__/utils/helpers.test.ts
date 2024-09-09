// helpers.test.ts

import { filterTargetArticle } from '@/app/utils/helpers';
import { BlogArticle } from '@/types/Blog.type';

describe('filterTargetArticle', () => {
  const mockArticles: BlogArticle[] = [
    { slug: 'article-1', title: 'Article 1' },
    { slug: 'article-2', title: 'Article 2' },
    { slug: 'article-3', title: 'Article 3' },
  ] as BlogArticle[];

  it('should filter out the target article', () => {
    const targetArticle = mockArticles[1];
    const result = filterTargetArticle(mockArticles, targetArticle);
    expect(result).toHaveLength(2);
    expect(result).not.toContainEqual(targetArticle);
    expect(result).toContainEqual(mockArticles[0]);
    expect(result).toContainEqual(mockArticles[2]);
  });

  it('should return all articles if target article is undefined', () => {
    const result = filterTargetArticle(mockArticles, undefined);
    expect(result).toEqual(mockArticles);
  });

  it('should return an empty array if input array is empty', () => {
    const result = filterTargetArticle([], mockArticles[0]);
    expect(result).toEqual([]);
  });
});
