export const ergContent = `[COURSE HEADER]
VERSION = 2
UNITS = ENGLISH
DESCRIPTION = Interwał 30" szybkość
FILE NAME = 2023-01-10_Interwał30.erg
FTP = 190
MINUTES WATTS
[END COURSE HEADER]
[COURSE DATA]
0	106
8	106
8	124
16	124
16	256
16.5	256
16.5	129
19.5	129
19.5	256
20	256
20	129
23	129
23	256
23.5	256
23.5	129
26.5	129
26.5	256
27	256
27	129
30	129
30	256
30.5	256
30.5	129
33.5	129
33.5	256
34	256
34	129
37	129
37	256
37.5	256
37.5	129
40.5	129
40.5	256
41	256
41	129
44	129
44	256
44.5	256
44.5	129
47.5	129
47.5	256
48	256
48	129
51	129
51	120
60	120
[END COURSE DATA]`;

export const ergJsonContent = `{
  "version": 1,
  "parsedFileVersion": "2",
  "parsedFileName": "2023-01-10_Interwał30.erg",
  "name": "2023-01-10_Interwał30.erg",
  "description": "Interwał 30\\" szybkość",
  "ftp": 190,
  "units": "IMPERIAL",
  "workoutType": "BIKE",
  "duration": 3600000,
  "workoutBlocks": [
    {
      "duration": 480000,
      "ftpScope": {
        "min": 106,
        "max": 106,
        "minPercent": 56,
        "maxPercent": 56,
        "deviation": 0
      }
    },
     {
        "duration": 480000,
        "ftpScope": {
           "min": 124,
           "max": 124,
           "deviation": 0
        }
     },
     {
        "duration": 2100000,
        "repeats": 10,
        "workoutBlock": [
           {
              "duration": 30000,
              "ftpScope": {
                 "min": 256,
                 "max": 256,
                 "deviation": 0
              }
           },
           {
              "duration": 180000,
              "ftpScope": {
                 "min": 129,
                 "max": 129,
                 "deviation": 0
              }
           }
        ]
     },
    {
      "duration": 540000,
      "ftpScope": {
        "min": 120,
        "max": 120,
        "minPercent": 63,
        "maxPercent": 63,
        "deviation": 0
      }
    }
  ]
}`;