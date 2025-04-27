-- Update the applications table to properly handle timestamps
ALTER TABLE applications
ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN created_at SET NOT NULL;

-- Add an index on created_at for better query performance
CREATE INDEX idx_applications_created_at ON applications(created_at DESC);
