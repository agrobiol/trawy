export const species = state => state.species

export const columns = state => (
  {
    name: {
      label: 'Nazwa polska'
    },
    nameLatin: {
      label: 'Nazwa łacińska'
    },
    heightTypes: {
      label: 'Wysokość',
      sortable: false,
      filters: [
        { text: 'wysoka', value: 'wysoka' },
        { text: 'średniowysoka', value: 'średniowysoka' },
        { text: 'niska', value: 'niska' },
        { text: 'bardzo niska', value: 'bardzo niska' }
      ]
    },
    propagations: {
      label: 'Krzewienie',
      sortable: false,
      filters: [
        { text: 'rozłogowa', value: 'rozłogowa' },
        { text: 'rozłogowo-luźnokępowa', value: 'rozłogowo-luźnokępowa' },
        { text: 'luźnokępowa', value: 'luźnokępowa' },
        { text: 'kępowa', value: 'kępowa' },
        { text: 'zbitokępowa', value: 'zbitokępowa' }
      ]
    },
    inflorescences: {
      label: 'Kwiatostan',
      sortable: false,
      filters: [
        { text: 'wiecha właściwa', value: 'wiecha właściwa' },
        { text: 'kłos pozorny', value: 'kłos pozorny' },
        { text: 'wiecha podwójna', value: 'wiecha podwójna' },
        { text: 'kłos właściwy', value: 'kłos właściwy' },
        { text: 'wiecha pojedyncza', value: 'wiecha pojedyncza' },
        { text: 'kłos właściwy jednostronny', value: 'kłos właściwy jednostronny' }
      ]
    },
    humidity: {
      label: 'Siedlisko',
      sortable: false,
      filters: [
        { text: 'długotrwale zalewane', value: 'długotrwale zalewane' },
        { text: 'okresowo zalewane', value: 'okresowo zalewane' },
        { text: 'wilgotne', value: 'wilgotne' },
        { text: 'umiarkowanie wilgotne', value: 'umiarkowanie wilgotne' },
        { text: 'umiarkowanie suche', value: 'umiarkowanie suche' },
        { text: 'suche', value: 'suche' }
      ]
    },
    indicators: {
      label: 'Bioindykacja',
      sortable: false,
      filters: [
        { text: 'wskaźnik zasobności w azot', value: 'wskaźnik zasobności w azot' },
        { text: 'wskaźnik nieuregulowanych stosunków wodnych', value: 'wskaźnik nieuregulowanych stosunków wodnych' },
        { text: 'wskaźnik gleb ubogich', value: 'wskaźnik gleb ubogich' },
        { text: 'wskaźnik zasobności w wapń', value: 'wskaźnik zasobności w wapń' },
        { text: 'wskaźnik degradacji gleb torfowych', value: 'wskaźnik degradacji gleb torfowych' },
        { text: 'wskaźnik degradacji darni', value: 'wskaźnik degradacji darni' },
        { text: 'wskaźnik niedoboru fosforu', value: 'wskaźnik niedoboru fosforu' },
        { text: 'wskaźnik gleb kwaśnych', value: 'wskaźnik gleb kwaśnych' },
        { text: 'wskaźnik niskiego poziomu wód gruntowych', value: 'wskaźnik niskiego poziomu wód gruntowych' }
      ]
    },
    weeds: {
      label: 'Chwast',
      sortable: false,
      filters: [
        { text: 'chwast bezwzględny', value: 'chwast bezwzględny' },
        { text: 'chwast względny', value: 'chwast względny' }
      ]
    },
    meadowsApplicable: {
      label: 'Łąki',
      align: 'center',
      filters: [
        { text: 'tak', value: { max: 2, min: 1 } },
        { text: 'nie', value: { max: 0 } }
      ]
    },
    pasturesApplicable: {
      label: 'Pastwiska',
      align: 'center',
      filters: [
        { text: 'tak', value: { max: 2, min: 1 } },
        { text: 'nie', value: { max: 0 } }
      ]
    },
    shortUsagesApplicable: {
      label: 'Krótkotrwałe',
      align: 'center',
      filters: [
        { text: 'tak', value: { max: 2, min: 1 } },
        { text: 'nie', value: { max: 0 } }
      ]
    },
    lwu: {
      label: 'Wartość',
      filters: [
        { text: 'bardzo dobra', value: { max: 10, min: 9 } },
        { text: 'dobra', value: { max: 8, min: 7 } },
        { text: 'średnia', value: { max: 6, min: 4 } },
        { text: 'niska', value: { max: 3 } }
      ]
    }
  }
)
