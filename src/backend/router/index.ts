import * as trpc from '@trpc/server';
import { z } from 'zod';
import { prisma } from '@/backend/utils/prisma';
import { getColorIds } from '@/utils/getColorIds';

export const appRouter = trpc.router().query('get-color-palette', {
  async resolve() {
    const ids = getColorIds();

    const colors = await prisma.color.findMany({
      where: { id: { in: ids } },
    });

    if (colors.length !== 16)
      throw new Error('Failed to fill the color palette');

    return colors;
  },
});
// .mutation('cast-vote', {
//   input: z.object({
//     votedFor: z.number(),
//     votedAgainst: z.number(),
//   }),
//   async resolve({ input }) {
//     const voteInDb = await prisma.vote.create({
//       data: {
//         votedAgainstId: input.votedAgainst,
//         votedForId: input.votedFor,
//       },
//     });
//     return { success: true, vote: voteInDb };
//   },
// });
// export type definition of API
export type AppRouter = typeof appRouter;
