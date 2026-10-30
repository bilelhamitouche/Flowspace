export default function Logo({
    width,
    height,
    dark = false,
}: {
    width?: number;
    height?: number;
    dark?: boolean;
}) {
    return (
        <img
            src={dark ? "/logo-dark.png" : "/logo.png"}
            alt="Flowspace"
            width={width ? width : 150}
            height={height ? height : 80}
        />
    );
}
