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

export type AppRouter = typeof appRouter;
