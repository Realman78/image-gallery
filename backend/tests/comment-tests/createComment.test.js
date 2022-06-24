import {createCommentFetcher} from './createCommentFetcher.mjs'

test('Kreira komentar s postojecim userom i postom', async () => {
    expect(await createCommentFetcher({
        content: 'Testni komentar 1',
        user_id: 1,
        post_id: 1
    })).toBe('Testni komentar 1')
});