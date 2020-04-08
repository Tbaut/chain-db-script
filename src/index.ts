// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import chalk from 'chalk';

import { updateMotions, updateProposals, updateReferenda, updateTreasurys } from './updateStatuses';

async function main (): Promise<void> {
	await updateMotions();
	await updateReferenda();
	await updateProposals();
	await updateTreasurys();
}

main().catch(error => console.error(chalk.red(error)));
