// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import chalk from 'chalk';
import dotenv from 'dotenv';
import { GraphQLClient } from 'graphql-request';

import { getSdk as getOnchainSdk } from './generated/chain-db-graphql';
import { getOnChainMotionsStatuses, getOnChainProposalsStatuses, getOnChainReferendaStatuses, getOnChainTreasurysStatuses } from './getStatuses';

dotenv.config();

const onchainGraphqlServerUrl = process.env.CHAIN_DB_GRAPHQL_URL;

export const updateMotions = async (): Promise<void> => {
	if (!onchainGraphqlServerUrl) {
		console.error(
			chalk.red('GraphQL endpoint not set in environment variables!')
		);
		return;
	}

	const motions = await getOnChainMotionsStatuses();

	const client = new GraphQLClient(onchainGraphqlServerUrl, { headers: {} });
	const onchainSdk = getOnchainSdk(client);

	if (!motions) {
		console.log('no motion');
		return;
	}

	const result = motions?.map(async motion => {
		const motionId = motion?.motionProposalId;
		const statuses = motion?.motionStatus;

		const uniqueIds = statuses?.map(async status => {
			const { status: statusName, id } = status;

			const res = await onchainSdk.addUniqueFieldMotion({ id, uniqueStatus: `${motionId}_${statusName}` });
			return res.updateMotionStatus?.uniqueStatus;
		});

		if (!uniqueIds) {
			return null;
		}

		const res = await Promise.all(uniqueIds);
		return res;
	});

	if (result) {
		const res = await Promise.all(result);
		console.log('Motions unique ids', JSON.stringify(res, null, 2));
	}
};

export const updateReferenda = async (): Promise<void> => {
	if (!onchainGraphqlServerUrl) {
		console.error(
			chalk.red('GraphQL endpoint not set in environment variables!')
		);
		return;
	}

	const referedendum = await getOnChainReferendaStatuses();

	const client = new GraphQLClient(onchainGraphqlServerUrl, { headers: {} });
	const onchainSdk = getOnchainSdk(client);

	if (!referedendum) {
		console.log('no referedendum');
		return;
	}

	const result = referedendum?.map(async referedendum => {
		const referedendumId = referedendum?.referendumId;
		const statuses = referedendum?.referendumStatus;

		const uniqueIds = statuses?.map(async status => {
			const { status: statusName, id } = status;

			const res = await onchainSdk.addUniqueFieldReferendum({ id, uniqueStatus: `${referedendumId}_${statusName}` });
			return res.updateReferendumStatus?.uniqueStatus;
		});

		if (!uniqueIds) {
			return null;
		}

		const res = await Promise.all(uniqueIds);
		return res;
	});

	if (result) {
		const res = await Promise.all(result);
		console.log('Referenda unique ids', JSON.stringify(res, null, 2));
	}
};

export const updateProposals = async (): Promise<void> => {
	if (!onchainGraphqlServerUrl) {
		console.error(
			chalk.red('GraphQL endpoint not set in environment variables!')
		);
		return;
	}

	const proposals = await getOnChainProposalsStatuses();

	const client = new GraphQLClient(onchainGraphqlServerUrl, { headers: {} });
	const onchainSdk = getOnchainSdk(client);

	if (!proposals) {
		console.log('no proposal');
		return;
	}

	const result = proposals?.map(async proposal => {
		const proposalId = proposal?.proposalId;
		const statuses = proposal?.proposalStatus;

		const uniqueIds = statuses?.map(async status => {
			const { status: statusName, id } = status;

			const res = await onchainSdk.addUniqueFieldProposal({ id, uniqueStatus: `${proposalId}_${statusName}` });
			return res.updateProposalStatus?.uniqueStatus;
		});

		if (!uniqueIds) {
			return null;
		}

		const res = await Promise.all(uniqueIds);
		return res;
	});

	if (result) {
		const res = await Promise.all(result);
		console.log('Proposals unique ids', JSON.stringify(res, null, 2));
	}
};

export const updateTreasurys = async (): Promise<void> => {
	if (!onchainGraphqlServerUrl) {
		console.error(
			chalk.red('GraphQL endpoint not set in environment variables!')
		);
		return;
	}

	const treasurys = await getOnChainTreasurysStatuses();

	const client = new GraphQLClient(onchainGraphqlServerUrl, { headers: {} });
	const onchainSdk = getOnchainSdk(client);

	if (!treasurys) {
		console.log('no treasury');
		return;
	}

	const result = treasurys?.map(async treasury => {
		const treasuryId = treasury?.treasuryProposalId;
		const statuses = treasury?.treasuryStatus;

		const uniqueIds = statuses?.map(async status => {
			const { status: statusName, id } = status;

			const res = await onchainSdk.addUniqueFieldTreasury({ id, uniqueStatus: `${treasuryId}_${statusName}` });
			return res.updateTreasuryStatus?.uniqueStatus;
		});

		if (!uniqueIds) {
			return null;
		}

		const res = await Promise.all(uniqueIds);
		return res;
	});

	if (result) {
		const res = await Promise.all(result);
		console.log('Treasury unique ids', JSON.stringify(res, null, 2));
	}
};
