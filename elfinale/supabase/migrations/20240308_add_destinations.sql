-- Add desired_destinations column to applications table
ALTER TABLE applications 
ADD COLUMN desired_destinations TEXT;

-- Update any existing records to have an empty string
UPDATE applications 
SET desired_destinations = '' 
WHERE desired_destinations IS NULL;

