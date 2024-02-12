interface FilterButtonInterface {
    text: string,
    selected?: boolean
}

const FilterButton = ({text='Filter', selected = false}: FilterButtonInterface) => {
    const extraStyles = selected ? "bg-primary-500 text-white " : "bg-white text-primary-500 border border-primary-500"

    return (
        <>
            <button className={`h-9 rounded-md py-0 px-2 ${extraStyles}`}>{text}</button>
        </>
    )

}
export default FilterButton;
