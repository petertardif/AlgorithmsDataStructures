BEGIN: 

TRUNCATE TABLE
  clicks
  RESTART IDENTITY CASCADE;

ALTER TABLE clicks ALTER COLUMN advertiser_id SET DEFAULT 3;

COPY clicks FROM 'Users/peter_tardif/Documents/Code/codingChallenges/adcellerant/seeds/files/Amazon_04_01_2019.csv' DELIMITER ',' CSV HEADER;

ALTER TABLE clicks ALTER COLUMN advertiser_id DROP DEFAULT;

COMMIT;