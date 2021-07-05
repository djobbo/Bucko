import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import ArtworksQuery from '@graphql/AllArtworks.gql';
import { RichText, RichTextBlock } from 'prismic-reactjs';

interface ArtworksQueryResponse {
	allArtworks: {
		edges: [
			{
				node: {
					title: RichTextBlock[];
					thumb: RichTextBlock;
					type: string;
				};
			}
		];
	};
}

export const fetchAllArtworks =
	(client: ApolloClient<NormalizedCacheObject>) => async () => {
		try {
			const res = await client.query<ArtworksQueryResponse>({
				query: ArtworksQuery,
			});

			const artworks = res.data.allArtworks.edges.map(({ node }) => ({
				title: RichText.asText(node.title),
				thumb: node.thumb.url ?? '',
				type: node.type,
			}));

			return artworks;
		} catch (e) {
			throw e;
		}
	};