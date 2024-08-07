function Container(props: any) {
    return ( 
        <div className="max-w-[1320px] mx-auto">
            {props.children}
        </div>
     );
}

export default Container;