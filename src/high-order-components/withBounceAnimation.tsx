const withBounceAnimation = <P extends Object>(
  Component: React.FC<P>
): React.FC<P> => {
  return ({ children, ...props }) => {
    return (
      <div className="animate-bounce hover:animate-none">
        <Component {...(props as P)} />
      </div>
    );
  };
};

export default withBounceAnimation;
