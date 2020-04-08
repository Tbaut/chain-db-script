// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';

export const addUniqueFieldMotion = gql`
    mutation addUniqueFieldMotion($id: ID!, $uniqueStatus: String!) {
		updateMotionStatus(
			where: { id: $id }
			data: { uniqueStatus: $uniqueStatus }
		) {
			uniqueStatus
		}
	}
`;

export const getOnchainMotionStatuses = gql`
    query getOnchainMotionStatuses {
        motions {
            ...onchainMotion
        }
    }
    fragment onchainMotion on Motion {
        motionProposalId
        motionStatus {
            ...motionStatus
        }
    }
    fragment motionStatus on MotionStatus {
        id
        status
    }
`;

export const addUniqueFieldReferendum = gql`
    mutation addUniqueFieldReferendum($id: ID!, $uniqueStatus: String!) {
		updateReferendumStatus(
			where: { id: $id }
			data: { uniqueStatus: $uniqueStatus }
		) {
			uniqueStatus
		}
	}
`;

export const getOnchainReferendaStatuses = gql`
    query getOnchainReferendaStatuses {
        referendums {
            ...onchainReferendum
        }
    }
    fragment onchainReferendum on Referendum {
        referendumId
        referendumStatus {
            ...refStatus
        }
    }
    fragment refStatus on ReferendumStatus {
        id
        status
    }
`;

export const addUniqueFieldTreasury = gql`
    mutation addUniqueFieldTreasury($id: ID!, $uniqueStatus: String!) {
		updateTreasuryStatus(
			where: { id: $id }
			data: { uniqueStatus: $uniqueStatus }
		) {
			uniqueStatus
		}
	}
`;

export const getOnchainTreasuryStatuses = gql`
    query getOnchainTreasuryStatuses {
        treasurySpendProposals {
            ...onchainTreasury
        }
    }
    fragment onchainTreasury on TreasurySpendProposal {
        treasuryProposalId
        treasuryStatus {
            ...treasuryStatus
        }
    }
    fragment treasuryStatus on TreasuryStatus {
        id
        status
    }
`;

export const addUniqueFieldProposal = gql`
    mutation addUniqueFieldProposal($id: ID!, $uniqueStatus: String!) {
		updateProposalStatus(
			where: { id: $id }
			data: { uniqueStatus: $uniqueStatus }
		) {
			uniqueStatus
		}
	}
`;

export const getOnchainProposalStatuses = gql`
    query getOnchainProposalStatuses {
        proposals {
            ...onchainProposal
        }
    }
    fragment onchainProposal on Proposal {
        proposalId
        proposalStatus {
            ...proposalStatus
        }
    }
    fragment proposalStatus on ProposalStatus {
        id
        status
    }
`;
