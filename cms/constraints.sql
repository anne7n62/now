-- Regler, som d9's snapshot ikke gemmer. Kør efter schema apply.
-- DROP ... IF EXISTS gør, at filen kan køres flere gange uden fejl.
ALTER TABLE weekly_events_categories DROP CONSTRAINT IF EXISTS weekly_events_categories_unique;
ALTER TABLE weekly_events_categories ADD CONSTRAINT weekly_events_categories_unique
  UNIQUE (weekly_events_id, categories_id);
