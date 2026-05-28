/*
This is the fil in which you configure the data widgets. Feel free to experiment with the configuration options. 
But it is also completely okay to write and issue and ask for help to configure the widgets.
You probably want to check out the documentation at https://hp-theme.gbif-staging.org/documentation-intro
*/
var siteConfig = {
  "version": 3,
  "pages": [ // which pages do we want to enable
    {
      "id": "occurrenceSearch"
    },
    {
      "id": "occurrenceKey"
    },
    {
      "id": "collectionSearch"
    },
    {
      "id": "collectionKey"
    },
    {
      "id": "datasetSearch"
    },
    {
      "id": "datasetKey"
    },
    {
      "id": "institutionSearch"
    },
    {
      "id": "institutionKey"
    },
    {
      "id": "publisherSearch"
    },
    {
      "id": "publisherKey"
    },
    {
      "id": "literatureSearch"
    },
  ],
  "disableInlineTableFilterButtons": false,
  "availableCatalogues": [
    "OCCURRENCE",
    "DATASET",
    "COLLECTION",
    "INSTITUTION",
    "PUBLISHER",
    "LITERATURE",
  ],
  "dataHeader": {
    "enableApiPopup": false,
    "enableInfoPopup": false
  },
  "theme": {
    "primary": themeStyle.colors.primary,
    "borderRadius": 3,
    "stickyOffset": "0px"
  },
  "maps": {
    "mapStyles": {
      "defaultProjection": "MERCATOR",
      "defaultMapStyle": "BRIGHT",
      "options": {
        "MERCATOR": [
          "NATURAL",
          "BRIGHT",
        ]
      }
    }
  },
  "languages": [
    {
      "code": "en",
      "localeCode": "en",
      "label": "English",
      "default": true,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    },
    {
      "code": "da",
      "localeCode": "da",
      "label": "Dansk",
      "default": false,
      "textDirection": "ltr",
      "iso3LetterCode": "dan",
      "cmsLocale": "en-GB",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    }
  ],
  "messages": {},
  "occurrenceSearch": {
    "scope": {
      "type": "or",
      "predicates": [
          {
              "key": "publishingCountry",
              "type": "equals",
              "value": "SE"
          },
          {
              "type": "and",
              "predicates": [
                  {
                      "key": "country",
                      "type": "equals",
                      "value": "SE"
                  },
                  {
                      "key": "notIssues",
                      "type": "equals",
                      "value": "COUNTRY_COORDINATE_MISMATCH"
                  }
              ]
          }
      ]
  },
    "highlightedFilters": [
      "taxonKey",
      "verbatimScientificName",
      "institutionKey",
      "collectionKey",
      "catalogNumber",
      "recordedBy",
      "identifiedBy"
    ],
    "excludedFilters": [
      "occurrenceStatus",
      "networkKey",
      "hostingOrganizationKey",
      "protocol",
      "publishingCountry",
      "institutionCode",
      "collectionCode"
    ],
    "defaultEnabledTableColumns": [
      "features",
      "institutionKey",
      "collectionKey",
      "catalogNumber",
      "country",
      "year",
      "recordedBy",
      "identifiedBy"
    ],
    "tabs": [
      "table",
      "gallery",
      "map",
//      "clusters",
      "dashboard",
      "download"
    ],
    "mapSettings": {
      "lat": 63.00,
      "lng": 16.00,
      "zoom": 5.0
    }
  },
  "collectionSearch": {
    excludedFilters: ['country', 'active'],
    // highlightedFilters: ['q', 'type', 'publishingOrg', 'license'],
    // defaultTableColumns: ['title', 'description', 'publisher', 'type', 'occurrenceCount', 'literatureCount'],
    scope: {
      country: "SE",
      active: true
    },
  },
  "institutionSearch": {
    excludedFilters: ['country', 'active'],
    // highlightedFilters: ['q', 'type'],
    // defaultTableColumns: ['title', 'type'],
    scope: {
      country: "SE",
      active: true
    }
  },
  "datasetSearch": {
    excludedFilters: ['publishingCountry', 'networkKey', 'projectId', 'hostingOrg'],
    highlightedFilters: ['q', 'type', 'publishingOrg', 'license'],
    scope: {
      publishingCountry: "SE"
    },
  },
  "publisherSearch": {
    excludedFilters: ['country'],
    scope: {
      country: "SE",
      active: true
    },
  },
  "literatureSearch": {
    "scope": {
      "type": "or",
      "predicates": [
          {
              "type": "in",
              "key": "countriesOfResearcher",
              "values": [
                  "SE"
              ]
          },
          {
              "type": "in",
              "key": "countriesOfCoverage",
              "values": [
                  "SE"
              ]
          }
      ]
  }
  }
}
