import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PropertyType } from '../../constants/enums'

interface SelectorsStore {
  currentGroupId: number | null
  currentComplexId: number | null
  currentDeveloperId: number | null
  currentBuildingId: number
  currentCityId: number | null
  currentRegionId: number | null
  districtId: number | null
  propertyType: PropertyType
}

const state: SelectorsStore = {
  currentGroupId: null,
  currentComplexId: null,
  currentDeveloperId: null,
  currentRegionId: null,
  currentCityId: null,
  currentBuildingId: 1,
  districtId: null,
  propertyType: 'LIVING',
}
let storage: SelectorsStore | null = null

if (typeof window !== 'undefined') {
  storage = JSON.parse(window.localStorage.getItem('icoOptions') as string)
}

const setLocalStorage = (state: SelectorsStore) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('icoOptions', JSON.stringify(state))
  }
}

export const SelectorsSlice = createSlice({
  name: 'selectors',
  initialState: storage ?? state,
  reducers: {
    setCurrentGroupId(state, action: PayloadAction<number | null>) {
      state.currentGroupId = action.payload
      state.currentComplexId = null
      setLocalStorage(state)
    },
    setCurrentComplexId(state, action: PayloadAction<number | null>) {
      state.currentComplexId = action.payload
      setLocalStorage(state)
    },
    setCurrentBuildingId(state, action: PayloadAction<number>) {
      state.currentBuildingId = action.payload
      setLocalStorage(state)
    },
    setPropertyType(state, action: PayloadAction<PropertyType>) {
      state.propertyType = action.payload
      setLocalStorage(state)
    },
    setCurrentRegionId(state, action: PayloadAction<number | null>) {
      state.currentRegionId = action.payload
      state.currentCityId = null
      setLocalStorage(state)
    },
    setDistrictId(state, action: PayloadAction<number | null>) {
      state.districtId = action.payload
      state.currentComplexId = null
      setLocalStorage(state)
    },
    setCurrentCityId(state, action: PayloadAction<number | null>) {
      state.currentCityId = action.payload
      state.districtId = null
      setLocalStorage(state)
    },
    setCurrentDeveloperId(state, action: PayloadAction<number | null>) {
      state.currentDeveloperId = action.payload
      setLocalStorage(state)
    },
    reset: () => state,
  },
})

export const selectorsReducer = SelectorsSlice.reducer

export const selectorsActions = SelectorsSlice.actions
