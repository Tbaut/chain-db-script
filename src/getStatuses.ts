// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/* eslint-disable camelcase */
import chalk from 'chalk';
import dotenv from 'dotenv';
import { GraphQLClient } from 'graphql-request';

import {
	getSdk as getOnchainSdk,
	OnchainMotionFragment,
	OnchainProposalFragment,
	OnchainReferendumFragment,
	OnchainTreasuryFragment
} from './generated/chain-db-graphql';

dotenv.config();

const onchainGraphqlServerUrl = process.env.CHAIN_DB_GRAPHQL_URL;

export const getOnChainMotionsStatuses = async (): Promise<Array<OnchainMotionFragment | null> | undefined> => {
	if (!onchainGraphqlServerUrl) {
		throw new Error(
			'Environment variable for the CHAIN_DB_GRAPHQL_URL not set'
		);
	}

	try {
		const client = new GraphQLClient(onchainGraphqlServerUrl, { headers: {} });

		const onchainSdk = getOnchainSdk(client);
		const data = await onchainSdk.getOnchainMotionStatuses();

		return data?.motions;
	} catch (err) {
		console.error(chalk.red('getOnChainMotionsStatuses execution'), err);
	}
};

export const getOnChainReferendaStatuses = async (): Promise<Array<OnchainReferendumFragment | null> | undefined> => {
	if (!onchainGraphqlServerUrl) {
		throw new Error(
			'Environment variable for the CHAIN_DB_GRAPHQL_URL not set'
		);
	}

	try {
		const client = new GraphQLClient(onchainGraphqlServerUrl, { headers: {} });

		const onchainSdk = getOnchainSdk(client);
		const data = await onchainSdk.getOnchainReferendaStatuses();

		return data?.referendums;
	} catch (err) {
		console.error(chalk.red('getOnChainReferendaStatuses execution'), err);
	}
};

export const getOnChainProposalsStatuses = async (): Promise<Array<OnchainProposalFragment | null> | undefined> => {
	if (!onchainGraphqlServerUrl) {
		throw new Error(
			'Environment variable for the CHAIN_DB_GRAPHQL_URL not set'
		);
	}

	try {
		const client = new GraphQLClient(onchainGraphqlServerUrl, { headers: {} });

		const onchainSdk = getOnchainSdk(client);
		const data = await onchainSdk.getOnchainProposalStatuses();

		return data?.proposals;
	} catch (err) {
		console.error(chalk.red('getOnChainProposalsStatuses execution'), err);
	}
};

export const getOnChainTreasurysStatuses = async (): Promise<Array<OnchainTreasuryFragment | null> | undefined> => {
	if (!onchainGraphqlServerUrl) {
		throw new Error(
			'Environment variable for the CHAIN_DB_GRAPHQL_URL not set'
		);
	}

	try {
		const client = new GraphQLClient(onchainGraphqlServerUrl, { headers: {} });

		const onchainSdk = getOnchainSdk(client);
		const data = await onchainSdk.getOnchainTreasuryStatuses();

		return data?.treasurySpendProposals;
	} catch (err) {
		console.error(chalk.red('getOnChainTreasurysStatuses execution'), err);
	}
};
