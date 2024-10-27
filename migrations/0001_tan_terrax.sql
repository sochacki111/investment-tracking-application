-- Add new UUID column
ALTER TABLE "investment" ADD COLUMN "new_id" uuid;

-- Set new UUIDs for all existing rows
UPDATE "investment" SET "new_id" = gen_random_uuid();

-- Make new_id not nullable
ALTER TABLE "investment" ALTER COLUMN "new_id" SET NOT NULL;

-- Drop the old id column and rename new_id to id
ALTER TABLE "investment" DROP COLUMN "id";
ALTER TABLE "investment" RENAME COLUMN "new_id" TO "id";

-- Set the default for future inserts
ALTER TABLE "investment" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
