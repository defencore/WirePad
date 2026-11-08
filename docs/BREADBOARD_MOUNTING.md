# Breadboard mounting

Build directly on a configurable breadboard with **1243 reviewed insertable parts**: 1025 boards/modules, 177 rigid through-hole parts and 41 parts with bendable leads. The catalog contains 2003 components in 146 families. Every seated lead joins the actual breadboard conductor; coincident drawings alone never create a connection.

## Assemble a circuit

1. Add a breadboard from the library. Enable **Breadboard parts** to show insertable components.
2. Click a part to find a free insertion position automatically. The selected breadboard, a selected mounted part's host, or the only breadboard in the project supplies the target. With several unrelated breadboards, select the intended host first. You can also drag from the library or move an existing part to choose a precise location.
3. A green preview confirms a complete insertion. Amber shows a partially seated flexible part, and blocked feedback explains when a complete fit is unavailable. Occupied sockets and holes concealed under another seated body cannot be claimed by a new placement.
4. In **Select**, drag a formed part's lead tip to another free hole. Lifting one tip removes only its direct seating connection; other seated tips remain connected. Use **Move body, keep leads** in the Inspector to reposition the body while keeping the tips in their holes. Lead reach is bounded by the reviewed profile.
5. Hover or focus a breadboard hole to highlight its complete internal strip and see whether the socket is **Free**, **Wired** or **Occupied**. Press and hold to highlight the full equipotential net, including mounted parts, jumpers and internal connections.
6. Choose **Wire** to draw a jumper between exact contacts or spare holes. A known breadboard hole is a direct touch target, rather than opening the entire board's pin picker. Switch back to **Select** to adjust a flexible lead.
7. Move or rotate the breadboard to carry its seated parts. Undo/Redo restores a complete placement or lead edit in one step. Saved projects and SVG/PNG exports retain the formed geometry and electrical contact positions.
8. In the breadboard Inspector, set either terminal bank to **1–50 cells per row** and use **Apply layout**. Seated parts move to accessible holes on their original conductors when a complete arrangement is possible. Their physical scale stays fixed. A removed wired contact, a changed wired conductor or an impossible fit rejects the whole edit; Undo/Redo restores the layout and all mounted placements together.

Selecting a part displays one nearby action panel with **Rotate**, **Nudge**, **Fit selection** and **Delete**. Rotate advances 90°; Nudge expands arrows inside that panel. The selection frame follows the visible body with a small outline clearance. Breadboards use their actual plastic outline instead of the SVG's empty border. Module contact functions stay labeled inside the PCB; dense auxiliary contacts may use terminal numbers with full functions on hover. These annotations do not cover adjacent breadboard holes and remain readable through quarter-turns and image export.

The ordinary-part source maps, package facts and eligibility exclusions are recorded in [catalog-breadboard-parts-2026-11-08.json](catalog-breadboard-parts-2026-11-08.json). Devboard references and precise physical body regions are in [catalog-breadboard-mounting-2026-11-08.json](catalog-breadboard-mounting-2026-11-08.json). The complete source-module review is in [catalog-source-module-mounting-2026-11-08.json](catalog-source-module-mounting-2026-11-08.json). Separate named-family audits cover [popular devboards](catalog-popular-board-mounting-2026-11-08.json), [radio, sensors and DIY modules](catalog-radio-diy-mounting-2026-11-08.json), and [Luckfox, Sipeed and FPGA boards](catalog-mini-computing-mounting-2026-11-08.json). Each audit lists supported entries and concrete reasons for deferred or incompatible entries.

## Ordinary through-hole parts

| Class | Behavior |
| --- | --- |
| Resistors and axial diodes | Fixed-size body with independently formed metal leads; can bridge terminal strips, the trench or a power rail. |
| LEDs, ceramic and electrolytic capacitors | Fixed package body and polarity; formed tips can move independently to reachable holes. |
| Named TO-92 transistors and MOSFETs | The exact reviewed E/B/C or S/G/D order stays attached to its stable contact IDs when leads fan out. |
| DIP ICs and straight headers | Every source-reviewed contact must fit the real pitch and row spacing. Their bodies and contact patterns never stretch to an arbitrary hole arrangement. |
| Omron B3F-1000 | Four physical tails, formed from the manufacturer's 6.5 × 4.5 mm pattern onto a 7.62 × 5.08 mm insertion pattern. The component-side view has common top contacts 4–3 and common bottom contacts 2–1; the two groups remain separate in the normally-open diagram. |

The generic two-contact schematic pushbutton is not treated as a four-tail switch. Choose the reviewed Omron part for that physical arrangement. SMT packages and unreviewed generic pin orders do not acquire a breadboard profile automatically. A separate rear-view illustration does not prevent a reviewed primary header from being inserted; its auxiliary contacts remain available in the explicit physical view.

## Supported profiles

The 2026-11-08 expansion enables **399 additional boards/modules**: 207 source modules, 70 popular devboards, 105 radio/DIY/sensor modules and 17 miniature computing/FPGA boards. Examples include Pico 2/2 W, Nano 33 BLE/Sense, Arduino Micro and MKR, Teensy, XIAO, Blue Pill/WeAct, Nucleo32, additional LILYGO boards, EBYTE UART radios, BME280/ADS1115/INA219, motor drivers, Luckfox Pico and Lichee RV Nano. The complete [component tree](COMPONENTS.md) marks each reviewed insertable entry with `[BB:+]`, hosts with `[BB:H]` and entries without a reviewed insertion profile with `[BB:-]`. These marks are independent of KiCad accuracy.

A subsequent follow-up reviews **91 previously unsupported candidates** and enables **26 additional modules**: five LILYGO boards, seven miniature computing/FPGA boards, five radio/DIY boards, three measurement sensors, three legacy Click boards, two Modulino boards and the Waveshare BMM150. The new views retain all **720 published endpoints** and insert **528 complete header leads**. Canonical definitions, default illustrations and native KiCad/CAD assets are unchanged. Sources and per-entry decisions are recorded in the [LILYGO follow-up](catalog-lilygo-mounting-followup-2026-11-08.json), [computing follow-up](catalog-mini-computing-mounting-followup-2026-11-08.json), [radio/DIY follow-up](catalog-radio-diy-mounting-followup-2026-11-08.json), [measurement-sensor review](catalog-measurement-sensors-mounting-2026-11-08.json) and [legacy-module review](catalog-legacy-module-mounting-followup-2026-11-08.json).

The source review distinguishes unresolved candidates from genuinely different interfaces. A matching 2.54 mm strip can be supported even when its old illustration is out of scale or includes a separate rear view. A complete map and declared assembly still matter: the QT Rotary view uses the bare breakout without a fitted encoder, the MAX9814 microphone and OpenLog card face upward, and the PMSA003I capsule remains above the PCB. Optional service headers, cable contacts and projected rear pads remain wireable without being counted as inserted leads. Dense stacking sockets, two-millimeter cable connectors and genuinely off-grid rows require another assembly or an adapter. The exact FSR402 part 44-29103 has no metal contacts; the distinct solder-tab variant is not silently substituted.

The following table retains the original fourteen devboard reference profiles. The linked audits enumerate all current profiles.

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

These devboards require straight **2.54 mm male headers installed with insertion leads below the PCB**. Profiles refer to the exact catalog entries and reviewed header layouts, rather than every product sharing a family name. SWD, ICSP, jumpers and other auxiliary contacts remain available for ordinary wiring.

The source-module review now supports **789 profiles**: 245 Adafruit, 95 SparkFun, 34 DFRobot, all 400 MIKROE entries and 15 Seeed Studio modules. Each profile identifies its complete downward insertion headers and manufacturer evidence. Optional whole duplicate headers can face upward or remain unpopulated only where every omitted terminal already reaches an inserted lead through verified internal connections. Unique electrical functions are retained. Inner plated holes and separate outer castellations keep distinct contact IDs. Every declared downward lead must fit; actual row spacing and breadboard conductors determine whether the complete pattern is electrically safe.

Profiles describe the reviewed **straight male-header assembly**. Right-angle/female connectors may require replacing or repopulating the header; this requirement is recorded on the entry. Manufacturer dimensions can distinguish PCB drill or SMT-land centers from the centers of installed straight header posts. For example, the XIAO insertion view uses the actual header positions rather than the centers of its outer SMT lands. This adjustment applies only to the explicit fitted instance. The original PCB drawing and source coordinates remain available.

A fitted component-side view keeps all published contact IDs. Dashed magenta **B** markers identify projected underside pads; they are available for wiring but are not inserted leads. Projecting rear hardware has a dashed outline and still participates in physical clearance. Source-reviewed internal aliases needed by a new view are activated only for that explicit instance, preserving old projects' connection graphs.

## Heltec WiFi LoRa 32

All four existing Heltec entries now support the nominal straight-header assembly: V3.2, V4.2 R2, V4.3 R2 and V4.3.2 R8. Populate both complete 18-contact main strips downward; their pitch is 2.54 mm and their opposing-row centers are 22.86 mm apart. The four V4 auxiliary through-holes retain their IDs and labels but remain unpopulated downward or face upward. They are not silently included in the insertion pattern.

The separate [Heltec source audit](catalog-heltec-mounting-2026-11-08.json) records the manufacturer dimension drawings, CAD coordinates and source revisions. V4.2 and V4.3.1 use an identical dimensioned mechanical image, and the R8 datasheet independently dimensions the same main headers. V3.2 uses a nominal family assembly: the manufacturer's V3/V4 compatibility statement, V3 hardware history and current V3 PCB CAD corroborate the 22.86 mm header grid. This is an explicit inference about the compatible straight-header assembly, not a claim that a later PCB file is the exact V3.2 production board. The old V3 DWG's incidental 23.025 mm illustrated row spacing is retained as a discrepancy and is not used as an insertion grid or production drill reference.

PCB tapers, the USB shell and the projecting antenna socket define clearance. The first spare outer row below the main headers stays accessible beside the narrower antenna tail. These profiles activate only on new fitted instances; older raw and scale-only drawings and all native assets keep their original geometry. See [Heltec validation](heltec-mounting-validation-2026-11-08.json).

## Placement and connections

- A complete insertion requires every declared lead to reach a free, accessible hole. Rigid parts cannot insert partially. Flexible tips can be lifted individually; only their explicitly listed seating pairs contribute electrical edges. Separate contacts cannot be collapsed onto one strip unless the real component already connects them internally, as on paired switch tails.
- Rigid boards and ICs use terminal holes. Bendable through-hole parts can also reach power-rail holes. Split rails retain separate conductors; rail colors do not assign a voltage or join separate buses.
- Reviewed physical regions govern clearance and covered-hole masking. PCB, antenna and connector material cover only their actual footprint; blank pin-label columns and lower captions do not consume sockets. Metal leads may bridge a gap without reserving that whole gap as a solid rectangle. Visual selection and image bounds include the complete visible body and lead shape.
- Devboard artwork is calibrated independently along its two axes where necessary to restore the reviewed pitch and row spacing. Source modules use their explicit millimeter-to-canvas calibration; a composite front/back illustration becomes a compact component-side view when fitted and stays compact when lifted. Newly remapped profiles require the explicit saved instance field `view: "breadboard"`; a scale-only older instance retains its original contact positions and artwork. Their physical view also supplies the insertion and rotation center. Flexible part bodies have a fixed physical scale; only their metal tips move. Default catalog drawings and native assets remain unchanged.
- Of the 789 source-module profiles, 644 use an exact source grid. The remaining 145 MIKROE STEP-derived maps document 0.001 mm coordinate rounding of nominal 2.54 mm headers. Only those profiles receive the corresponding small host-scaled matching tolerance; canvas anchors and source CAD coordinates remain unchanged.
- Quarter-turn orientations are considered, preferring the module's current orientation. Rotation of the breadboard is supported. Moving or rotating the host carries its seated modules, including modules that extend beyond its bounds.
- Dragging or nudging a whole part independently, or rotating it independently, removes its old electrical attachment. A subsequent valid drag can seat it again. Fitted size and formed lead shape are retained when lifted. The visible keep-leads control provides the separate body-only movement operation.
- Seated contacts participate in Trace, wire-color inference and the breadboard's existing conductors. No hidden wire objects are added. Unoccupied holes on the same strip remain usable; host holes covered by a seated PCB are hidden from direct canvas interaction.
- Resizing preserves each seated lead's conductor and finds free replacement holes when needed. It solves all final module positions together, preserving rigid geometry and checking physical body clearance. Flexible leads may adjust within their reach. Wired sockets retain their IDs and original conductors, including split-rail segments. Deleting a breadboard leaves its former modules in place, detached. Undo/Redo restores the complete previous state.
- Saved projects retain scale, formed local tips, an explicit physical-view selector where needed, and explicit contact pairs. Old version-1 and version-2 projects remain unscaled and unmounted; overlapping existing parts are never connected automatically on import. Existing explicit wire/lead graphs remain readable. Symbol, footprint and 3D exports continue using the original catalog geometry.

## Verification

The focused tests cover source profiles, fixed pitch, complete and partial insertion, exact physical occupancy, covered holes, lead reach, polarity, paired switch contacts, body-only clearance, strict saved-project validation, electrical continuity, atomic edits, host movement/rotation, history and preview lifecycle. Browser checks assemble a resistor/LED/timer/button circuit, adjust leads, reposition a body while retaining its tips, inspect strips/nets, create a real jumper, use touch targets and export SVG/PNG.

All 2003 published component definitions, 48146 canonical pin anchors, 4006 default SVG views and 6009 generated native assets remain unchanged in this expansion. Mounting profiles do not change the per-component KiCad accuracy assessments; a successful insertion or native import does not establish production accuracy.

The earlier five-part workbench validation is recorded in [breadboard-workbench-validation-2026-11-08.json](breadboard-workbench-validation-2026-11-08.json). The body/scale and 50-cell correction validation is recorded in [breadboard-scale-validation-2026-11-08.json](breadboard-scale-validation-2026-11-08.json). Focused checks include the pictured C6 placement at every quarter-turn, whole-header insertion and saved-project round trips for all current module profiles, rotated/scaled hosts, front-view rotation centers, conductor-preserving reflow, desktop and touch interaction, and SVG/PNG export.

The 399-profile expansion, explicit physical views, source checks, complete placement and saved-project checks, canonical/native preservation, labeled and unlabeled rendering, desktop/touch interaction and versioned build checks are recorded in [breadboard-library-expansion-validation-2026-11-08.json](breadboard-library-expansion-validation-2026-11-08.json).

Tight outlines, restored module labels and the consolidated action panel are covered in [contextual-controls-validation-2026-11-08.json](contextual-controls-validation-2026-11-08.json).

The interaction design draws on Fritzing's documented [confirmed breadboard connections and equipotential highlighting](https://fritzing.org/learning/tutorials/building-circuit) and [independent bendable legs](https://blog.fritzing.org/2011/08/18/fritzing-gets-the-bends). WirePad's code and artwork implement these behaviors within its own component and project model.

```sh
node scripts/catalog.mjs
node scripts/catalog-tree.mjs --check
node --test
git diff --check
```
