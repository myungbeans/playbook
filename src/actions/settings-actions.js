export const UPDATE_GRID_SETTINGS = 'settings: updateGridSettings'

export function updateGridSettings(settings) {
    return {
        type: UPDATE_GRID_SETTINGS,
        payload: {
            gridSettings: settings
        }
    }
}