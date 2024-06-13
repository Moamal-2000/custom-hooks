import s from "./ListedSection.module.scss";

const ListedSection = ({ listData, name }) => {
  const isListDataExist = listData?.length !== 0 && listData;

  const listItems = listData?.map((item, index) => (
    <li key={`${name}-${index}`}>
      {index + 1}- {item}
    </li>
  ));

  return (
    isListDataExist && (
      <section className={s.section}>
        <h3>{name}:</h3>
        <ul>{listItems}</ul>
      </section>
    )
  );
};

export default ListedSection;
