-- Fix the applications table timestamp issues
ALTER TABLE applications 
DROP COLUMN IF EXISTS created_at;

-- Re-add the column with proper constraints
ALTER TABLE applications
ADD COLUMN created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- Add the same fix to flyer_requests table if needed
ALTER TABLE flyer_requests
DROP COLUMN IF EXISTS created_at;

ALTER TABLE flyer_requests
ADD COLUMN created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_flyer_requests_created_at ON flyer_requests(created_at DESC);
