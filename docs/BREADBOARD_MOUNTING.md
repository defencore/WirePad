# Breadboard mounting

Build directly on a configurable breadboard with **232 reviewed insertable parts**: 14 devboards, 177 rigid through-hole parts and 41 parts with bendable leads. The catalog contains 2003 components in 146 families. Every seated lead joins the actual breadboard conductor; coincident drawings alone never create a connection.

## Assemble a circuit

1. Add a breadboard from the library. Enable **Breadboard parts** to show insertable components.
2. Click a part to find a free insertion position automatically. The selected breadboard, a selected mounted part's host, or the only breadboard in the project supplies the target. With several unrelated breadboards, select the intended host first. You can also drag from the library or move an existing part to choose a precise location.
3. A green preview confirms a complete insertion. Amber shows a partially seated flexible part, and blocked feedback explains when a complete fit is unavailable. Occupied sockets and holes concealed under another seated body cannot be claimed by a new placement.
4. In **Select**, drag a formed part's lead tip to another free hole. Lifting one tip removes only its direct seating connection; other seated tips remain connected. Use **Move body, keep leads** in the Inspector to reposition the body while keeping the tips in their holes. Lead reach is bounded by the reviewed profile.
5. Hover or focus a breadboard hole to highlight its complete internal strip and see whether the socket is **Free**, **Wired** or **Occupied**. Press and hold to highlight the full equipotential net, including mounted parts, jumpers and internal connections.
6. Choose **Wire** to draw a jumper between exact contacts or spare holes. A known breadboard hole is a direct touch target, rather than opening the entire board's pin picker. Switch back to **Select** to adjust a flexible lead.
7. Move or rotate the breadboard to carry its seated parts. Undo/Redo restores a complete placement or lead edit in one step. Saved projects and SVG/PNG exports retain the formed geometry and electrical contact positions.

The ordinary-part source maps, package facts and eligibility exclusions are recorded in [catalog-breadboard-parts-2026-11-08.json](catalog-breadboard-parts-2026-11-08.json). The earlier devboard references remain in [catalog-breadboard-mounting-2026-11-08.json](catalog-breadboard-mounting-2026-11-08.json).

## Ordinary through-hole parts

| Class | Behavior |
| --- | --- |
| Resistors and axial diodes | Fixed-size body with independently formed metal leads; can bridge terminal strips, the trench or a power rail. |
| LEDs, ceramic and electrolytic capacitors | Fixed package body and polarity; formed tips can move independently to reachable holes. |
| Named TO-92 transistors and MOSFETs | The exact reviewed E/B/C or S/G/D order stays attached to its stable contact IDs when leads fan out. |
| DIP ICs and straight headers | Every source-reviewed contact must fit the real pitch and row spacing. Their bodies and contact patterns never stretch to an arbitrary hole arrangement. |
| Omron B3F-1000 | Four physical tails, formed from the manufacturer's 6.5 × 4.5 mm pattern onto a 7.62 × 5.08 mm insertion pattern. The component-side view has common top contacts 4–3 and common bottom contacts 2–1; the two groups remain separate in the normally-open diagram. |

The generic two-contact schematic pushbutton is not treated as a four-tail switch. Choose the reviewed Omron part for that physical arrangement. SMT packages, rear-view contact banks and unreviewed generic pin orders do not acquire a breadboard profile automatically.

## Supported profiles

| Board | Inserted leads | Header-row spacing | Manufacturer reference |
| --- | ---: | ---: | --- |
| Arduino Nano | 30 | 15.24 mm | [A000005](https://docs.arduino.cc/resources/datasheets/A000005-datasheet.pdf) |
| Arduino Nano Every | 30 | 15.24 mm | [ABX00028](https://docs.arduino.cc/resources/datasheets/ABX00028-datasheet.pdf) |
| Arduino Nano ESP32 | 30 | 15.24 mm | [ABX00083](https://docs.arduino.cc/resources/datasheets/ABX00083-datasheet.pdf) |
| Arduino Nano RP2040 Connect | 30 | 15.24 mm | [ABX00053](https://docs.arduino.cc/resources/datasheets/ABX00053-datasheet.pdf) |
| Arduino Nano R4 | 30 | 15.24 mm | [ABX00142](https://docs.arduino.cc/resources/datasheets/ABX00142-datasheet.pdf) |
| Raspberry Pi Pico | 40 | 17.78 mm | [Product brief](https://datasheets.raspberrypi.com/pico/pico-product-brief.pdf) |
| Raspberry Pi Pico W | 40 | 17.78 mm | [Product brief](https://datasheets.raspberrypi.com/picow/pico-w-product-brief.pdf) |
| Adafruit Feather ESP32-S3 | 28 | 20.32 mm | [Hardware downloads](https://learn.adafruit.com/adafruit-esp32-s3-feather/downloads) |
| Adafruit Feather RP2040 | 28 | 20.32 mm | [Hardware downloads](https://learn.adafruit.com/adafruit-feather-rp2040-pico/downloads) |
| ESP32-S3 DevKitM-1 | 44 | 22.86 mm | [V1 dimensions](https://dl.espressif.com/dl/schematics/DXF_ESP32-S3-DevKitM-1_V1_20210310AC.pdf) |
| ESP32-DevKitC V4 | 38 | 25.40 mm | [V4 dimensions](https://dl.espressif.com/dl/schematics/esp32_devkitc_v4_dimensions.pdf) |
| ESP32-C3-DevKitC-02 | 30 | 22.86 mm | [V1.1 dimensions](https://dl.espressif.com/dl/schematics/DXF_ESP32-C3-DevKitC-02_V1_1_20210121AA.pdf) |
| ESP32-C6-DevKitM-1 | 30 | 22.86 mm | [Dimensions](https://dl.espressif.com/dl/schematics/esp32-c6-devkitm-1-dimensions.pdf) |
| ESP32-S2-DevKitM-1 | 42 | 22.86 mm | [V1 dimensions](https://dl.espressif.com/dl/schematics/ESP32-S2-DevKitM-1_V1_Dimensions.pdf) |

These devboards require straight **2.54 mm male headers installed with insertion leads below the PCB**. Profiles refer to the exact catalog entries and reviewed header layouts, rather than every product sharing a family name. SWD, ICSP, jumpers and other auxiliary contacts remain available for ordinary wiring. Other modules retain their existing placement behavior until their insertion geometry is reviewed.

## Placement and connections

- A complete insertion requires every declared lead to reach a free, accessible hole. Rigid parts cannot insert partially. Flexible tips can be lifted individually; only their explicitly listed seating pairs contribute electrical edges. Separate contacts cannot be collapsed onto one strip unless the real component already connects them internally, as on paired switch tails.
- Rigid boards and ICs use terminal holes. Bendable through-hole parts can also reach power-rail holes. Split rails retain separate conductors; rail colors do not assign a voltage or join separate buses.
- Reviewed package bodies govern clearance and covered-hole masking. Their metal leads may bridge a gap without reserving that whole gap as a solid rectangle. Visual selection and image bounds include the complete body and lead shape.
- Devboard artwork is calibrated independently along its two axes where necessary to restore the reviewed pitch and row spacing. Flexible part bodies have a fixed physical scale; only their metal tips move. Default catalog drawings and native assets remain unchanged.
- Quarter-turn orientations are considered, preferring the module's current orientation. Rotation of the breadboard is supported. Moving or rotating the host carries its seated modules, including modules that extend beyond its bounds.
- Dragging or nudging a whole part independently, or rotating it independently, removes its old electrical attachment. A subsequent valid drag can seat it again. Fitted size and formed lead shape are retained when lifted. The visible keep-leads control provides the separate body-only movement operation.
- Seated contacts participate in Trace, wire-color inference and the breadboard's existing conductors. No hidden wire objects are added. Unoccupied holes on the same strip remain usable; host holes covered by a seated PCB are hidden from direct canvas interaction.
- Resizing a breadboard is allowed while all occupied hole positions survive unchanged. A change that moves or removes occupied holes is rejected. Deleting a breadboard leaves its former modules in place, detached. Undo/Redo restores the complete previous state.
- Saved projects retain scale, formed local tips and explicit contact pairs. Old version-1 and version-2 projects remain unscaled and unmounted; overlapping existing parts are never connected automatically on import. Existing explicit wire/lead graphs remain readable. Symbol, footprint and 3D exports continue using the original catalog geometry.

## Verification

The focused tests cover source profiles, fixed pitch, complete and partial insertion, exact physical occupancy, covered holes, lead reach, polarity, paired switch contacts, body-only clearance, strict saved-project validation, electrical continuity, atomic edits, host movement/rotation, history and preview lifecycle. Browser checks assemble a resistor/LED/timer/button circuit, adjust leads, reposition a body while retaining its tips, inspect strips/nets, create a real jumper, use touch targets and export SVG/PNG.

All prior 2002 component definitions, 4004 SVG views and 6006 generated native assets remain unchanged. The new Omron switch is appended with its own geometry fixtures and explicit reference/approximate accuracy assessment; a successful KiCad import does not establish production accuracy.

The final full suite passed **335 tests, with no failures or skips**. Desktop and native-touch checks exercised an actual five-part breadboard circuit with 16 inserted leads. All 588 JavaScript modules and 10 stylesheets loaded successfully in the versioned build; all 603 packaged source assets matched the source exactly. See [breadboard-workbench-validation-2026-11-08.json](breadboard-workbench-validation-2026-11-08.json) for the complete validation record.

The interaction design draws on Fritzing's documented [confirmed breadboard connections and equipotential highlighting](https://fritzing.org/learning/tutorials/building-circuit) and [independent bendable legs](https://blog.fritzing.org/2011/08/18/fritzing-gets-the-bends). WirePad's code and artwork implement these behaviors within its own component and project model.

```sh
node scripts/catalog.mjs
node scripts/catalog-tree.mjs --check
node --test
git diff --check
```
