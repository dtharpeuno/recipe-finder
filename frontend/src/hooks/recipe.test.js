import { renderHook, waitFor } from '@testing-library/react'
import { vi } from 'vitest'
import {
    getRecipeByIngredient,
    getRecipeByIdMeal,
    getRecipeByArea,
    getRecipeByCategory,
    getRecipeByName,
    getAllIngredients,
    getAllAreas,
    getAllCategories,
    getRandomRecipe
} from './recipe'

describe('recipe hooks -> getRandomRecipe', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    test('returns Data on successful fetch', async () => {
        const mockData = {
            meals: [{
                idMeal: "1"
            }],
        }

        vi.stubGlobal('fetch', vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockData),
            })
        ))

        const { result } = renderHook(() =>
            getRandomRecipe()
        )

        await waitFor(() => {
            expect(result.current.randomRecipe).not.toBe(null)
        })

        expect(result.current.randomRecipe).toEqual(mockData)
        expect(result.current.errorRandomRecipe).toBe(false)
        expect(result.current.loadingRandomRecipe).toBe(false)
    })

    test('handles API error response', async () => {
        const mockError = { message: 'Failed request' }

        vi.stubGlobal('fetch', vi.fn(() =>
            Promise.resolve({
                ok: false,
                json: () => Promise.resolve(mockError),
            })
        ))

        const { result } = renderHook(() =>
            getRandomRecipe()
        )

        await waitFor(() => {
            expect(result.current.loadingRandomRecipe).toBe(false)
        })

        expect(result.current.errorRandomRecipe).toEqual(mockError)
    })
})

describe('recipe hooks -> getAllCategories', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    test('returns Data on successful fetch', async () => {
        const mockData = {
            meals: [{
                strCategory: "Algerian"
            }],
        }

        vi.stubGlobal('fetch', vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockData),
            })
        ))

        const { result } = renderHook(() =>
            getAllCategories()
        )

        await waitFor(() => {
            expect(result.current.categories).not.toBe(null)
        })

        expect(result.current.categories).toEqual(mockData)
        expect(result.current.errorCategories).toBe(false)
        expect(result.current.loadingCategories).toBe(false)
    })

    test('handles API error response', async () => {
        const mockError = { message: 'Failed request' }

        vi.stubGlobal('fetch', vi.fn(() =>
            Promise.resolve({
                ok: false,
                json: () => Promise.resolve(mockError),
            })
        ))

        const { result } = renderHook(() =>
            getAllCategories()
        )

        await waitFor(() => {
            expect(result.current.loadingCategories).toBe(false)
        })

        expect(result.current.errorCategories).toEqual(mockError)
    })
})

describe('recipe hooks -> getAllAreas', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    test('returns Data on successful fetch', async () => {
        const mockData = {
            meals: [{
                strArea: "Algerian"
            }],
        }

        vi.stubGlobal('fetch', vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockData),
            })
        ))

        const { result } = renderHook(() =>
            getAllAreas()
        )

        await waitFor(() => {
            expect(result.current.areas).not.toBe(null)
        })

        expect(result.current.areas).toEqual(mockData)
        expect(result.current.errorAreas).toBe(false)
        expect(result.current.loadingAreas).toBe(false)
    })

    test('handles API error response', async () => {
        const mockError = { message: 'Failed request' }

        vi.stubGlobal('fetch', vi.fn(() =>
            Promise.resolve({
                ok: false,
                json: () => Promise.resolve(mockError),
            })
        ))

        const { result } = renderHook(() =>
            getAllAreas()
        )

        await waitFor(() => {
            expect(result.current.loadingAreas).toBe(false)
        })

        expect(result.current.errorAreas).toEqual(mockError)
    })
})


describe('recipe hooks -> getAllIngredients', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    test('returns Data on successful fetch', async () => {
        const mockData = {
            meals: [{
                idIngredient: "1",
                strIngredient: "Chicken"
            }],
        }

        vi.stubGlobal('fetch', vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockData),
            })
        ))

        const { result } = renderHook(() =>
            getAllIngredients()
        )

        await waitFor(() => {
            expect(result.current.ingredients).not.toBe(null)
        })

        expect(result.current.ingredients).toEqual(mockData)
        expect(result.current.errorIngredients).toBe(false)
        expect(result.current.loadingIngredients).toBe(false)
    })

    test('handles API error response', async () => {
        const mockError = { message: 'Failed request' }

        vi.stubGlobal('fetch', vi.fn(() =>
            Promise.resolve({
                ok: false,
                json: () => Promise.resolve(mockError),
            })
        ))

        const { result } = renderHook(() =>
            getAllIngredients()
        )

        await waitFor(() => {
            expect(result.current.loadingIngredients).toBe(false)
        })

        expect(result.current.errorIngredients).toEqual(mockError)
    })
})


describe('recipe hooks -> getRecipeByName', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    test('returns Data on successful fetch', async () => {
        const mockData = {
            meals: [{ idMeal: '123' }],
        }

        vi.stubGlobal('fetch', vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockData),
            })
        ))

        const { result } = renderHook(() =>
            getRecipeByName({ recipeName: 'MBuzi' })
        )

        await waitFor(() => {
            expect(result.current.data).not.toBe(null)
        })

        expect(result.current.data).toEqual(mockData)
        expect(result.current.error).toBe(false)
        expect(result.current.loading).toBe(false)
    })

    test('handles API error response', async () => {
        const mockError = { message: 'Failed request' }

        vi.stubGlobal('fetch', vi.fn(() =>
            Promise.resolve({
                ok: false,
                json: () => Promise.resolve(mockError),
            })
        ))

        const { result } = renderHook(() =>
            getRecipeByName({ recipeName: 'MBuzi' })
        )

        await waitFor(() => {
            expect(result.current.loading).toBe(false)
        })

        expect(result.current.error).toEqual(mockError)
    })
})

describe('recipe hooks -> getRecipeByCategory', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    test('returns Data on successful fetch', async () => {
        const mockData = {
            meals: [{ idMeal: '123' }],
        }

        vi.stubGlobal('fetch', vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockData),
            })
        ))

        const { result } = renderHook(() =>
            getRecipeByCategory({ recipeCategory: 'Basil' })
        )

        await waitFor(() => {
            expect(result.current.data).not.toBe(null)
        })

        expect(result.current.data).toEqual(mockData)
        expect(result.current.error).toBe(false)
        expect(result.current.loading).toBe(false)
    })

    test('handles API error response', async () => {
        const mockError = { message: 'Failed request' }

        vi.stubGlobal('fetch', vi.fn(() =>
            Promise.resolve({
                ok: false,
                json: () => Promise.resolve(mockError),
            })
        ))

        const { result } = renderHook(() =>
            getRecipeByCategory({ recipeCategory: 'Basil' })
        )

        await waitFor(() => {
            expect(result.current.loading).toBe(false)
        })

        expect(result.current.error).toEqual(mockError)
    })
})

describe('recipe hooks -> getRecipeByArea', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    test('returns Data on successful fetch', async () => {
        const mockData = {
            meals: [{ idMeal: '123' }],
        }

        vi.stubGlobal('fetch', vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockData),
            })
        ))

        const { result } = renderHook(() =>
            getRecipeByArea({ recipeArea: 'Spain' })
        )

        await waitFor(() => {
            expect(result.current.data).not.toBe(null)
        })

        expect(result.current.data).toEqual(mockData)
        expect(result.current.error).toBe(false)
        expect(result.current.loading).toBe(false)
    })

    test('handles API error response', async () => {
        const mockError = { message: 'Failed request' }

        vi.stubGlobal('fetch', vi.fn(() =>
            Promise.resolve({
                ok: false,
                json: () => Promise.resolve(mockError),
            })
        ))

        const { result } = renderHook(() =>
            getRecipeByArea({ recipeArea: 'Spain' })
        )

        await waitFor(() => {
            expect(result.current.loading).toBe(false)
        })

        expect(result.current.error).toEqual(mockError)
    })
})

describe('recipe hooks -> getRecipeByIngredient', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    test('returns Data on successful fetch', async () => {
        const mockData = {
            meals: [{ idMeal: '123' }],
        }

        vi.stubGlobal('fetch', vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockData),
            })
        ))

        const { result } = renderHook(() =>
            getRecipeByIngredient({ recipeIngredient: 'Chicken' })
        )

        await waitFor(() => {
            expect(result.current.data).not.toBe(null)
        })

        expect(result.current.data).toEqual(mockData)
        expect(result.current.error).toBe(false)
        expect(result.current.loading).toBe(false)
    })

    test('handles API error response', async () => {
        const mockError = { message: 'Failed request' }

        vi.stubGlobal('fetch', vi.fn(() =>
            Promise.resolve({
                ok: false,
                json: () => Promise.resolve(mockError),
            })
        ))

        const { result } = renderHook(() =>
            getRecipeByIngredient({ recipeIngredient: 'Chicken' })
        )

        await waitFor(() => {
            expect(result.current.loading).toBe(false)
        })

        expect(result.current.error).toEqual(mockError)
    })
})

describe('recipe hooks -> getRecipeByIdMeal', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    test('returns Data on successful fetch', async () => {
        const mockData = {
            meals: [{ idMeal: '123', strMeal: 'Chicken' }],
        }

        vi.stubGlobal('fetch', vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockData),
            })
        ))

        const { result } = renderHook(() =>
            getRecipeByIdMeal({ idMeal: '123' })
        )

        await waitFor(() => {
            expect(result.current.data).not.toBe(null)
        })

        expect(result.current.data).toEqual(mockData)
        expect(result.current.error).toBe(false)
        expect(result.current.loading).toBe(false)
    })

    test('handles API error response', async () => {
        const mockError = { message: 'Failed request' }

        vi.stubGlobal('fetch', vi.fn(() =>
            Promise.resolve({
                ok: false,
                json: () => Promise.resolve(mockError),
            })
        ))

        const { result } = renderHook(() =>
            getRecipeByIdMeal({ idMeal: '123' })
        )

        await waitFor(() => {
            expect(result.current.loading).toBe(false)
        })

        expect(result.current.error).toEqual(mockError)
    })
})