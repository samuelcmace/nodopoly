/* Switch Database */
USE nodopoly;

CREATE TABLE IF NOT EXISTS USERS(
    USER_ID int,
    LAST_NAME nvarchar(255),
    FIRST_NAME nvarchar(255),
    ADDRESS nvarchar(255),
    CITY nvarchar(255),
    STATE nvarchar(255),
    ZIP_CODE nvarchar(255)
);