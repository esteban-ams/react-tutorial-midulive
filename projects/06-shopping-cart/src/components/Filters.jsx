import { useState, useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters() {
    const { filters, setFilters } = useFilters()

    const [minPrice, setMinPrice] = useState(0) // estado local

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({ ...prevState, minPrice: event.target.value }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({ ...prevState, category: event.target.value }))
    }


    return (
        <section className="filters">
            <h1>Filtros</h1>
            <div>
                <label htmlFor="price">Price</label>
                <input
                    type="range"
                    name=""
                    id={minPriceFilterId}
                    min="0"
                    max="1000"
                    step="10"
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select name="" id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>
        </section>
    )

}