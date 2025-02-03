import "../styles.css"
export default function AccessibilityPane({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (<>
        <div className="accessibilityPanel">
            {children}
        </div>
    </>)
}