-- Add package_type column to applications table
ALTER TABLE applications 
ADD COLUMN package_type TEXT;

-- Update any existing records to have 'standard' as the default
UPDATE applications 
SET package_type = 'standard' 
WHERE package_type IS NULL;
