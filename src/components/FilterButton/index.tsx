interface FilterButtonInterface {
    text: string,
    selected?: boolean
}

const FilterButton = ({text, selected = false}: FilterButtonInterface) => {
    const extraStyles = selected ? "bg-primary-100 text-white " : "bg-white text-primary-100 border border-primary-100"

    return (
        <>
            <button className={`h-9 rounded-md py-0 px-2 ${extraStyles}`}>{text}</button>
        </>
    )

}
export default FilterButton;
